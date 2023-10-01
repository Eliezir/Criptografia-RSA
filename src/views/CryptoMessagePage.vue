<template>
    <v-container class="fill-height justify-center">
        <div class="w-50">
        <h1>Criptografando a mensagem</h1>
        <h2 class="text-body-1">Insira a chave gerada anteriormente e a mensagem que deseja criptografar </h2>
        <v-form @submit.prevent="generateKey" validate-on="submit" fast-fail>
        <v-text-field
          v-model="chave"
          type="number"
          label="Chave Pública"
          variant="outlined"
          class="mt-5"
          counter="9"
          required
          :rules="rules"
          />
          <v-textarea
          v-model="message"
          label="Mensagem a ser criptografada"
          variant="outlined"
          class="mt-5"
          counter="9"
          required
          :rules="rules"
          />
     
          <v-btn type="submit" class="mt-5" color="primary" block>criptografar Mensagem</v-btn>
    </v-form>
    </div>
    </v-container>
    </template>
    
    <script setup>
    import { ref } from "vue";
    const firstNumber = ref();
    const secondNumber = ref();
    const thirdNumber = ref();
    const primeKey = ref();
    
    const generateKey = () => {
     if(!firstNumber.value || !secondNumber.value || !thirdNumber.value) return; 
      primeKey.value = firstNumber.value * secondNumber.value;
      console.log(primeKey.value)
    };
    
    
    const rules = ref([
      (v) => !!v || "O campo é obrigatório",
      (v) => v > 9 || "O número deve ter no mínimo 2 dígitos",
      (v) => v < 999999999 || "O número deve ter no máximo 9 dígitos",
    ])
    
    
    </script>