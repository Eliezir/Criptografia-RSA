<template>
    <header>
        <h1>O que é uma API? 🧐 </h1>
    </header>

    <div class="my-5">
        <p>Uma API é uma espécie de ponte que liga diferentes tipos de software ou aplicações e pode ser criada em várias linguagens de programação. A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos".</p>
    </div>
    <v-img src="@/assets/docs/api-image.png"/>
    <ButtonsRow nextName="Conexão com o FrontEnd" @next="nextPage" previousName="Descriptografar" @previous="previousPage"/>
</template>

<script setup>
import ButtonsRow from "./buttonsRow.vue";
import { defineEmits } from "vue";
const emit = defineEmits(["next", "previous"]);
const nextPage = () => {
  emit("next", "frontEndConnection");
};

const previousPage = () => {
    emit("previous", "decrypting");
};
</script>