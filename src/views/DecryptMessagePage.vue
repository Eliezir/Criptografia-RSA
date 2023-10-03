<template>
    <v-container class="fill-height justify-center">
        <div class="w-50">
        <h1>Descriptografando a mensagem</h1>
        <h2 class="text-body-1">Insira a chave gerada anteriormente e a mensagem que deseja descriptografar </h2>
        <v-form @submit.prevent="cryptoMessage" fast-fail
        v-model="isFormValid"
        >
        <v-text-field
          v-model="primeKey"
          label="Chave Pública"
          variant="outlined"
          class="mt-5"
          counter="9"
          required
          hint="Por exemplo 7447385836446043  |  13382609"
          :rules="validateKey"
          />
          <v-textarea
          v-model="message"
          label="Mensagem a ser descriptografada"
          variant="outlined"
          class="mt-5"
          counter="9"
          required
          :rules="validateMessage"
          />
     
          <v-btn type="submit" class="mt-5" color="primary" block :disabled="!isFormValid">descriptografar Mensagem</v-btn>
    </v-form>
    </div>
    </v-container>
    <v-dialog v-model="dialog" max-width="728" color="background">
    <v-card class="bg-background d-flex align-center">
      <div class="d-flex align-center justify-space-between w-75 py-5">
        <v-card-title>A mensagem descriptografada é:</v-card-title>
        <v-icon @click="dialog = false">mdi-close</v-icon>
      </div>
      <v-textarea
        class="w-75"
        variant="outlined"
        v-model="newCryptoMessage"
        readonly
        ref="key"
      >
        <template v-slot:append-inner>
          <v-icon
            @click="copyToClipboard"
            :color="copiedValue ? 'green-accent-2' : 'grey'"
          >
            {{
              copiedValue
                ? "mdi-clipboard-check-multiple-outline"
                : "mdi-clipboard-multiple-outline"
            }}
          </v-icon>
        </template>
      </v-textarea>
      <v-card-actions class="w-75 d-flex align-center justify-end">
        <v-btn
        @click="saveToFile"
        variant="default"
        class="bg-primary"
        append-icon="mdi-download"
        >
          Baixar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
    </template>
    
    <script setup>
    import { ref } from "vue";
    const primeKey = ref();
    const message = ref();
    const firstNumber = ref();
    const secondNumber = ref();
    const dialog = ref(false);
    const copiedValue = ref(false);
    const newCryptoMessage = ref();
    const isFormValid = ref(false);
  
  
    const cryptoMessage = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5000/desencriptar'); //fetch para desencriptar
    if (!response.ok) {
      throw new Error('Erro ao buscar a chave pública');
    }
    const data = await response.json();

    const valuesArray = data.Chave_Publica.split(/\s*\|\s*|\s*,\s*|\s+/);
    firstNumber.value = valuesArray[0];
    secondNumber.value = valuesArray[1];
    newCryptoMessage.value = message.value;
    dialog.value = true;
  } catch (error) {
    console.error('Erro ao buscar a chave pública:', error);
  }
};
  
    const saveToFile = () => {
    const element = document.createElement("a");
    const file = new Blob([newCryptoMessage.value], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "mensagemDescriptografada.txt";
    document.body.appendChild(element);
    document.body.removeChild(element);
    element.click();
  };
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(newCryptoMessage.value);
      copiedValue.value = true;
    } catch (err) {
      copiedValue.value = false;
    }
  };
    
  const validateKey = ref([
    (v) => !!v || "O campo é obrigatório",
    () => {
      const valuesArray = primeKey.value.split(/\s*\|\s*|\s*,\s*|\s+/);
      const hasFirstNumber = !!valuesArray[0];
      const hasSecondNumber = !!valuesArray[1];
      return hasFirstNumber && hasSecondNumber || "A chave deve ser composta por dois números separados por um espaço ou uma barra vertical";
    }
  ])
    
  const validateMessage = ref([
    (v) => !!v || "O campo é obrigatório",
  ])

    </script>
