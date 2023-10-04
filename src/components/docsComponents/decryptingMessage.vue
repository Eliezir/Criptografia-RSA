<template>
  <div class="d-flex flex-column justify-center align-center">
    <h1 class="text-left w-100">Descriptografando Mensagens</h1>

    <div class="my-5">
      <p>
        Para descriptografar a mensagem, precisamos possuir a chave privada,
        isto é, o número que foi utilizado para descriptografar as mensagens. Esse
        número é um inverso modular, portanto, utilizamos uma função para achar
        esse inverso modular:
      </p>
    </div>
    <img class="w-100" src="@/assets/docs/inversoMod.png" />
    <div class="w-100">
      <p>
        Fazemos este processo para cada caractere da mensagem, retornando a letra correspondente de acordo com a tabela ASCII:
      </p>
    </div>
    <img class="w-100" src="@/assets/docs/letraCorrespondente.png" />
    <div class="w-100 my-5">
      <p>
        Por fim, adicionamos as letras descriptografadas em um array e criamos um arquivo txt para armazenar a mensagem e ser enviada para o front-end:
      </p>
    </div>
    <img class="w-100" src="@/assets/docs/descriptografar.png" />
    <ButtonsRow
      nextName="Conexão com o FrontEnd"
      @next="nextPage"
      previousName="Criptografar"
      @previous="previousPage"
    />
  </div>
</template>

<script setup>
import ButtonsRow from "./buttonsRow.vue";
import { defineEmits } from "vue";
const emit = defineEmits(["next", "previous"]);
const nextPage = () => {
  emit("next", "frontEndConnection");
};

const previousPage = () => {
  emit("previous", "crypting");
};
</script>
