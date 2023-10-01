<template>
<v-container class="fill-height justify-center">
    <div class="w-50">
    <h1>Gerando a Chave</h1>
    <h2 class="text-body-1">Insira três números primos entre 2 e 9 dígitos!</h2>
    <v-form @submit.prevent="generateKey" validate-on="submit" fast-fail>
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
      <v-btn type="submit" class="mt-5" color="primary" block>Gerar Chave</v-btn>
</v-form>
</div>
</v-container>
<v-container class="fill-height justify-center">
    <div class="w-50">
    <h1>Chave Gerada</h1>
    <h2 class="text-body-1">A chave gerada foi: {{primeKey}}</h2>
    </div>
    </v-container>
</template>

<script setup>
import { ref } from "vue";
const firstNumber = ref();
const secondNumber = ref();
const thirdNumber = ref();
const primeKey = ref();

const randomFirstNumber = () => {
  firstNumber.value = generate8DigitPrime();
};
const randomSecondNumber = () => {
  secondNumber.value = generate8DigitPrime();
};

const randomThirdNumber = () => {
  thirdNumber.value = generate8DigitPrime();
};

const generateKey = () => {
 if(!firstNumber.value || !secondNumber.value || !thirdNumber.value) return; 
  primeKey.value = firstNumber.value * secondNumber.value;
  console.log(primeKey.value)
};


const rules = ref([
  (v) => !!v || "O campo é obrigatório",
  (v) => v > 9 || "O número deve ter no mínimo 2 dígitos",
  (v) => v < 999999999 || "O número deve ter no máximo 9 dígitos",
  (v) => isPrime(v) || "O número deve ser primo",
])


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