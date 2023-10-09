<template>
  <div class="d-flex flex-column justify-center align-center">
    <h1 class="text-left w-100">Como gerar uma chave ?</h1>

    <div class="my-5">
      <h2>Chave pública</h2>
      <p>
        A chave pública, como o nome sugere,
        é uma chave de criptografia compartilhada publicamente. Ela é usada para
        cifrar os dados que precisam ser protegidos durante a transmissão. A
        característica crucial da chave pública é que ela pode ser usada por
        qualquer pessoa para cifrar uma mensagem, mas apenas a chave privada
        correspondente pode descriptografá-la com sucesso.
      </p>
    </div>
    <div>
      <h2>Chave Privada</h2>
      <p>
        A chave privada é o segredo que precisa ser mantido em sigilo absoluto. Somente o destinatário legítimo possui acesso a essa chave. Ela é usada para descriptografar as mensagens cifradas com a chave pública correspondente.
      </p>
    </div>
    <img class="w-75" src="@/assets/docs/key-example.png" />
    <ButtonsRow
      nextName="Criptografar"
      @next="nextPage"
      previousName="RSA"
      @previous="previousPage"
    />
  </div>
</template>

<script setup>
import ButtonsRow from "./buttonsRow.vue";
import { defineEmits } from "vue";
const emit = defineEmits(["next", "previous"]);
const nextPage = () => {
  emit("next", "crypting");
};

const previousPage = () => {
  emit("previous", "rsa");
};
</script>
