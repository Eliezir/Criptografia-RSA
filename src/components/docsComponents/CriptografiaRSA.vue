<template>
    <header>
        <h1>Como funciona o RSA?</h1>
    </header>

    <div class="my-5">
        <h2>Introdução ao RSA</h2>
        <p>A criptografia RSA (Rivest-Shamir-Adleman) é um dos algoritmos de criptografia assimétrica mais amplamente utilizados para proteger a comunicação na internet e para a autenticação de dados. Ela foi inventada por Ron Rivest, Adi Shamir e Leonard Adleman em 1977. A criptografia RSA utiliza um par de chaves, uma pública e uma privada, para criptografar e descriptografar mensagens.</p>
    </div>
    <v-img src="@/assets/docs/rsa-example.png"/>
    <ButtonsRow nextName="Chave" @next="nextPage" previousName="Index" @previous="previousPage"/>
</template>

<script setup>
import ButtonsRow from "./buttonsRow.vue";
import { defineEmits } from "vue";
const emit = defineEmits(["next", "previous"]);
const nextPage = () => {
  emit("next", "keyRSA");
};

const previousPage = () => {
    emit("previous", "index");
};
</script>