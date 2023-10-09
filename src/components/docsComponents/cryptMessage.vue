<template>
  <div class="d-flex flex-column justify-center align-center">
    <h1 class="text-left w-100">Criptografando Mensagens</h1>

    <div class="my-5">
      <h2>Convertendo</h2>
      <p>
        Antes de criptografar uma mensagem, ela deve ser convertida em uma forma
        numérica. Utilizamos um esquema de codificação que associa cada
        caractere da mensagem a um valor numérico, conhecido como sistema
        Unicode ou ASCII. O valor de cada caractere será calculado da seguinte
        forma: posição do array + 32. Exemplo: '!' equivale a 33 = 1 + 32.
      </p>
    </div>
    <img class="w-100" src="@/assets/docs/preCode.png" />
    <div class="my-5 w-100">
      <p>
        Para criptografar mensagens usando uma chave publica (n, e), Traduzimos
        a mensagem em uma sequencia de numeros inteiros e para cada letra
        (numero inteiro) M encontramos seu equivalente cifrado C a partir da
        função:<code>  C = f (M) = M^e mod n</code> <br>Para realizar essa exponenciação modular,
        utilizamos o algoritmo Exponenciação Modular Rápida:
      </p>
    </div>
    <img class="w-100" src="@/assets/docs/expoModRapida.png" />
    <img class="w-100" src="@/assets/docs/criptografia.png" />
    <ButtonsRow
      nextName="Descriptografar"
      @next="nextPage"
      previousName="KeyRSA"
      @previous="previousPage"
    />
  </div>
</template>

<script setup>
import ButtonsRow from "./buttonsRow.vue";
import { defineEmits } from "vue";
const emit = defineEmits(["next", "previous"]);
const nextPage = () => {
  emit("next", "decrypting");
};

const previousPage = () => {
  emit("previous", "keyRSA");
};
</script>
