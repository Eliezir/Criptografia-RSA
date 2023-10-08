<template>
  <div class="fill-height d-flex align-center justify-center">
    <v-container class="bg-secondary pa-0 pa-sm-10 rounded-xl w-90 w-sm-100">
      <v-row
        class="justify-center d-flex align-center flex-column-reverse flex-sm-row"
      >
      <v-row
        class="justify-center d-flex align-center flex-column-reverse flex-sm-row"
      >
        <v-col cols="10" sm="7" class="w-100">
          <h1 class="text-sm-left text-h4 font-weight-bold title">
            Criptografando a mensagem
          </h1>
          <h1 class="text-sm-left text-h4 font-weight-bold title">
            Criptografando a mensagem
          </h1>
          <h2 class="d-none d-sm-block text-body-1 text-justify mt-2">
            Insira a chave gerada anteriormente e a mensagem que deseja
            criptografar
          </h2>
          <v-form
            @submit.prevent="cryptoMessage"
            fast-fail
            v-model="isFormValid"
            class="d-flex flex-column"
          >
            <v-text-field
              v-model="primeKey"
              label="Chave Pública"
              theme="dark"
              variant="solo"
              class="mt-5"
              required
              hint="Por exemplo 7447385836446043  |  13382609"
              :rules="validateKey"
            />
            <v-textarea
              v-model="message"
              label="Mensagem a ser criptografada"
              theme="dark"
              variant="solo"
              class="mt-2"
              required
              :rules="validateMessage"
              no-resize
            />

            <v-btn
              type="submit"
              :class="[
                !isFormValid ? 'bg-transparent' : 'bg-green-accent-2',
                'align-self-center rounded-lg mb-10 mb-sm-0',
              ]"
              block
              block
              :disabled="!isFormValid"
              :variant="!isFormValid ? 'outlined' : 'tonal'"
              :loading="isLoading"
              >criptografar Mensagem</v-btn
            >
          </v-form>
        </v-col>
        <v-col cols="9" sm="5" class="d-flex justify-center align-center">
        <v-col cols="9" sm="5" class="d-flex justify-center align-center">
          <img src="../assets/topSecret.svg" class="img" />
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-dialog v-model="dialog" max-width="728" color="background">
    <v-card class="bg-background d-flex align-center">
      <v-icon @click="dialog = false" class="close-btn" color="grey-lighten-1"
        >mdi-close</v-icon
      >
      <v-icon @click="dialog = false" class="close-btn" color="grey-lighten-1"
        >mdi-close</v-icon
      >
      <div class="d-flex align-center justify-space-between w-90 py-5">
        <h1 class="text-sm-left text-h4 font-weight-bold title">
            Criptografando a mensagem
          </h1>
      </div>
      <v-textarea
        class="w-90"
        variant="outlined"
        v-model="newCryptoMessage"
        readonly
        ref="key"
        no-resize
        :rows="newCryptoMessage.length/40"
        label="Mensagem Criptografada"
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
        <v-btn @click="saveToFile" variant="default" class="bg-green mb-3 mr-3">
        <v-btn @click="saveToFile" variant="default" class="bg-green mb-3 mr-3">
          Download
        </v-btn>
        <v-btn
          variant="default"
          class="bg-accent mb-3"
          @click="$router.push('/decrypt-message')"
        >
          Descriptografar
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
const isLoading = ref(false);


const cryptoMessage = async () => {
  isLoading.value = true;
  copiedValue.value = false;
  const valuesArray = primeKey.value.split(/\s*\|\s*|\s*,\s*|\s+/);
  firstNumber.value = valuesArray[0];
  secondNumber.value = valuesArray[1];
  try {
    const response = await fetch(
      `http://eliezir.pythonanywhere.com/criptografar/${message.value} /${firstNumber.value}/${secondNumber.value}`
    );
    const data = await response.json();
    newCryptoMessage.value = data.Mensagem_Encriptada;
    dialog.value = true;
  } catch (err) {
    console.log(err);
  }
  isLoading.value = false;
};

const saveToFile = () => {
  const element = document.createElement("a");
  const file = new Blob([newCryptoMessage.value], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "mensagemCriptografada.txt";
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
  () => {
    const valuesArray = primeKey.value.split(/\s*\|\s*|\s*,\s*|\s+/);
    const isNumber = (value) => !isNaN(value);
    return (
      (isNumber(valuesArray[0]) && isNumber(valuesArray[1])) ||
      "Por favor, insira uma chave válida"
    );
  },
]);

const validateMessage = ref([(v) => !!v || "O campo é obrigatório"]);
</script>

<style scoped>
.img {
  width: 85%;
}
.title {
  font-family: "Lexend Deca", sans-serif !important;
  text-wrap: balance !important;
}

.w-90  {
  width: 90%;
}

.close-btn  {
  position: absolute;
  right: 10px;
  top: 10px;
}

</style>
