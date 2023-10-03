<template>
  <div class="fill-height d-flex align-center justify-center">
    <v-container class="bg-secondary pa-0 pa-sm-10 rounded-xl w-75 w-sm-100">
    <v-row class="justify-center d-flex align-center">
      <v-col cols="9" sm="5" class="d-flex justify-center align-content-center">
        <img src="../assets/generateKey.svg" class="img mb-0 mb-sm-10" />
      </v-col>
      <v-col cols="10" sm="7" class="w-100">
        <h1 class="text-h6 text-sm-h3 font-weight-bold title">
          Gerando A Chave
        </h1>
        <h2 class="text-body-1">
          Insira três números primos entre 2 e 9 dígitos!
        </h2>
        <v-form
          @submit.prevent="generateKey"
          v-model="isFormValid"
          fast-fail
          class="d-flex flex-column"
        >
          <v-text-field
            v-model="firstNumber"
            theme="dark"
            type="number"
            label="Primeiro Número Primo"
            variant="solo"
            append-inner-icon="mdi-shuffle-variant"
            @click:append-inner="randomFirstNumber()"
            class="mt-5"
            counter="9"
            required
            :rules="rules"
          />
          <v-text-field
            v-model="secondNumber"
            theme="dark"
            type="number"
            label="Segundo Número Primo"
            variant="solo"
            append-inner-icon="mdi-shuffle-variant"
            @click:append-inner="randomSecondNumber()"
            class="mt-1"
            counter="9"
            required
            :rules="rules"
          />
          <v-text-field
            v-model="thirdNumber"
            type="number"
            theme="dark"
            label="Número Coprimo"
            variant="solo"
            append-inner-icon="mdi-shuffle-variant"
            @click:append-inner="randomThirdNumber()"
            class="my-1"
            counter="9"
            required
            :rules="coprimeRules"
          />
          <v-btn
            type="submit"
            :class="[
              !isFormValid ? 'bg-transparent' : 'bg-black',
              'w-50 w-sm-25 align-self-end rounded-lg mb-10 mb-sm-0',
            ]"
            :variant="!isFormValid ? 'outlined' : 'tonal'"
            :disabled="!isFormValid"
            >Gerar Chave</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="dialog" max-width="728">
    <v-card class="bg-background d-flex align-center justify-center">
      <div class="d-flex align-center justify-space-between w-75 py-5">
        <v-card-title> A chave gerada é: </v-card-title>
        <v-icon @click="dialog = false">mdi-close</v-icon>
      </div>
      <v-text-field
        class="w-75"
        variant="outlined"
        v-model="primeKey"
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
      </v-text-field>
      <v-card-actions class="w-75 d-flex align-center justify-end">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
const firstNumber = ref();
const secondNumber = ref();
const thirdNumber = ref();
const primeKey = ref();
const dialog = ref(false);
const isFormValid = ref(false);
const copiedValue = ref(false);

const randomFirstNumber = () => {
  firstNumber.value = generate8DigitPrime();
};
const randomSecondNumber = () => {
  secondNumber.value = generate8DigitPrime();
};

const randomThirdNumber = () => {
  thirdNumber.value = generate8DigitPrime();
};

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(primeKey.value);
    copiedValue.value = true;
  } catch (err) {
    copiedValue.value = false;
  }
};

const saveToFile = () => {
  const element = document.createElement("a");
  const file = new Blob([primeKey.value], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "chave.txt";
  document.body.appendChild(element);
  document.body.removeChild(element);
  element.click();
};

const generateKey = () => {
  copiedValue.value = false;
  if (!firstNumber.value || !secondNumber.value || !thirdNumber.value) return;
  const value = firstNumber.value * secondNumber.value;
  primeKey.value = `${value}  |  ${thirdNumber.value}`;
  dialog.value = true;
};

const rules = ref([
  (v) => !!v || "O campo é obrigatório",
  (v) => v > 9 || "O número deve ter no mínimo 2 dígitos",
  (v) => v < 999999999 || "O número deve ter no máximo 9 dígitos",
  (v) => isPrime(v) || "O número deve ser primo",
]);

const coprimeRules = ref([
  (v) => !!v || "O campo é obrigatório",
  (v) => v > 9 || "O número deve ter no mínimo 2 dígitos",
  (v) => v < 999999999 || "O número deve ter no máximo 9 dígitos",
  (v) => isPrime(v) || "O número deve ser primo",
  (v) =>
    isCoprime(v, firstNumber.value, secondNumber.value) ||
    "O número deve ser coprimo de p e q",
]);

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function generate8DigitPrime() {
  let number = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;

  while (!isPrime(number)) {
    number++;
    if (number > 99999999) {
      number = 10000000;
    }
  }

  return number;
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function isCoprime(E, P, Q) {
  const phi = (P - 1) * (Q - 1);
  const mdcEPhi = gcd(E, phi);

  return mdcEPhi === 1;
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Sen&display=swap");

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.img {
  width: 85%;
}

.title {
  font-family: "Lexend Deca", sans-serif !important;
}
</style>
