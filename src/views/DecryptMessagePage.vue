<template>
  <div class="fill-height d-flex align-center justify-center">
    <v-container class="bg-secondary pa-0 pa-sm-10 rounded-xl w-75 w-sm-100">
      <v-row class="justify-center d-flex align-center">
        <v-col cols="9" sm="5" class="d-flex justify-center align-center">
          <v-img src="../assets/decryptImg.svg" class="mb-0 mb-sm-10" />
        </v-col>
        <v-col cols="10" sm="7" class="w-100">
          <h1 class="text-sm-left text-h5 text-sm-h4 font-weight-bold title">
            Descriptografando a mensagem</h1>
            <h2 class="d-none d-sm-block text-body-1 text-justify mt-2">
            Insira a chave gerada anteriormente e a mensagem que deseja
            descriptografar
          </h2>
          <v-form
            @submit.prevent="cryptoMessage"
            fast-fail
            v-model="isFormValid"
          >
            <v-text-field
              v-model="primeKey"
              label="Chave Pública"
              variant="solo"
              theme="dark"
              class="mt-5"
              counter="9"
              required
              hint="Por exemplo 7447385836446043  |  13382609"
              :rules="validateKey"
            />
            <v-textarea
              v-model="message"
              label="Mensagem a ser descriptografada"
              variant="solo"
              theme="dark"
              class="mt-2"
              no-resize
              required
              :rules="validateMessage"
            />

            <v-btn
              type="submit"
              :class="[
                !isFormValid ? 'bg-transparent' : 'bg-green-accent-2',
                'align-self-center rounded-lg mb-10 mb-sm-0',
              ]"
               block
              :disabled="!isFormValid"
              :variant="!isFormValid ? 'outlined' : 'tonal'"
              >descriptografar Mensagem</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-dialog v-model="dialog" max-width="728" color="background">
    <v-card class="bg-background d-flex align-center">
      <v-icon @click="dialog = false" class="close-btn" color="grey-lighten-1">mdi-close</v-icon>
      <div class="d-flex align-center justify-space-between w-90 py-5">
        <h1 class="text-left">A mensagem descriptografada é:</h1>
      </div>
      <v-textarea
        class="w-90"
        variant="outlined"
        v-model="newCryptoMessage"
        readonly
        ref="key"
        no-resize
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
      <v-card-actions class="w-90 d-flex align-center justify-end">
        <v-btn
          @click="saveToFile"
          variant="default"
          class="bg-green mb-3"
        >
          Download
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
    const response = await fetch("http://127.0.0.1:5000/desencriptar"); //fetch para desencriptar
    if (!response.ok) {
      throw new Error("Erro ao buscar a chave pública");
    }
    const data = await response.json();

    const valuesArray = data.Chave_Publica.split(/\s*\|\s*|\s*,\s*|\s+/);
    firstNumber.value = valuesArray[0];
    secondNumber.value = valuesArray[1];
    newCryptoMessage.value = message.value;
    dialog.value = true;
  } catch (error) {
    console.error("Erro ao buscar a chave pública:", error);
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
    return (
      (hasFirstNumber && hasSecondNumber) ||
      "A chave deve ser composta por dois números separados por um espaço ou uma barra vertical"
    );
  },
]);

const validateMessage = ref([(v) => !!v || "O campo é obrigatório"]);
</script>

<style scoped>
.title {
  font-family: "Lexend Deca", sans-serif !important;
  text-wrap: balance !important;
}

.w-90{
  width: 90%;
}
.close-btn{
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>