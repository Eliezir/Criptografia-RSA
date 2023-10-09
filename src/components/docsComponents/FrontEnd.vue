<template>
    <header>
        <h1>Como foi feito o nosso FrontEnd ? </h1>
    </header>

    <div class="my-5 d-flex flex-column align-center">
        <p class="w-100 text-body-1 mb-3 ">Como você já deve ter percebido, o nosso frontend foi desenvolvido para a web, utilizando as tecnologias Vue.js e Vuetify. Se você deseja explorar mais detalhes sobre como construímos essa parte do nosso projeto, fique à vontade para conferir o código-fonte em nosso repositório <a href="https://github.com/Eliezir/Criptografia-RSA" target="_blank"> GitHub</a>. Lá, você encontrará informações mais detalhadas e poderá explorar o código por conta própria.</p>
        <img class="w-100" src="@/assets/docs/frontend-img.png"/>
    </div>
    
    <ButtonsRow nextName="VueJS" @next="nextPage" previousName="Conexão com o FrontEnd" @previous="previousPage"/>
</template>

<script setup>
import ButtonsRow from "./buttonsRow.vue";
import { defineEmits } from "vue";
const emit = defineEmits(["next", "previous"]);
const nextPage = () => {
  emit("next", "VueJS");
};

const previousPage = () => {
    emit("previous", "frontEndConnection");
};
</script>

<style scoped>
a{
    color: #966cea;
    transition: all 0.5s ease;
    text-decoration: underline;
}
</style>