<template>
  <v-container class="fill-height justify-center">
    <div class="w-50">
      <h1>Gerando a Chave</h1>
      <h2 class="text-body-1">
        Insira três números primos entre 2 e 9 dígitos!
      </h2>
      <v-form @submit.prevent="generateKey" v-model="isFormValid" fast-fail>
        <v-text-field
          v-model="firstNumber"
          type="number"
          label="Primeiro Número Primo"
          variant="outlined"
          append-inner-icon="mdi-shuffle-variant"
          @click:append-inner="randomFirstNumber()"
          class="mt-5"
          counter="9"
          required
          :rules="rules"
        />
        <v-text-field
          v-model="secondNumber"
          type="number"
          label="Segundo Número Primo"
          variant="outlined"
          append-inner-icon="mdi-shuffle-variant"
          @click:append-inner="randomSecondNumber()"
          class="mt-5"
          counter="9"
          required
          :rules="rules"
        />
        <v-text-field
          v-model="thirdNumber"
          type="number"
          label="Terceiro Número Primo"
          variant="outlined"
          append-inner-icon="mdi-shuffle-variant"
          @click:append-inner="randomThirdNumber()"
          class="mt-5"
          counter="9"
          required
          :rules="rules"
        />
        <v-btn
          type="submit"
          class="mt-5"
          color="primary"
          block
          :disabled="!isFormValid"
          >Gerar Chave</v-btn
        >
      </v-form>
    </div>
  </v-container>
  <v-dialog v-model="dialog" max-width="728" color="background">
    <v-card class="bg-background d-flex align-center">
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

const generateKey = async () => {
  copiedValue.value = false;
  if (!firstNumber.value || !secondNumber.value || !thirdNumber.value) return;
  const value = firstNumber.value * secondNumber.value;
  primeKey.value = `${value}  |  ${thirdNumber.value}`
  dialog.value = true;


try {
    const response = await fetch('http://127.0.0.1:5000/chavepublica');  //fetch para a API/chavepublica
    if (!response.ok) {
      throw new Error('Erro ao buscar a chave pública');
    }
    const data = await response.json();
   
  } catch (error) {
    console.error('Erro ao buscar a chave pública:', error);
  }
};

const rules = ref([
  (v) => !!v || "O campo é obrigatório",
  (v) => v > 9 || "O número deve ter no mínimo 2 dígitos",
  (v) => v < 999999999 || "O número deve ter no máximo 9 dígitos",
  (v) => isPrime(v) || "O número deve ser primo",
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
</script>
