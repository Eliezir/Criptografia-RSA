<template>
    <header>
        <h1 >Vue JS</h1>
    </header>
    <div class="my-5 d-flex flex-column align-center">
        <img style="width: 100%;" class="mb-5" src="@/assets/docs/vue-img2.jpg"/>
        <p class="w-100 text-body-1 mb-3 "> Vue.js é um poderoso framework JavaScript de código-aberto que tem ganhado destaque no mundo do desenvolvimento web. Ele é conhecido por sua flexibilidade e facilidade de uso, tornando-o uma escolha popular para a criação de interfaces de usuário dinâmicas e atraentes.</p>
        <p class="w-100 text-body-1 mb-3 ">No nosso projeto, aproveitamos as vantagens do Vue.js para desenvolver a parte frontend da nossa aplicação. Com Vue.js, conseguimos criar uma experiência de usuário suave e interativa, permitindo que os nossos usuários interajam de forma eficiente com a nossa aplicação.</p>
        <p class="w-100 text-body-1 mb-3 ">Se você estiver interessado em aprender mais sobre Vue.js e como o utilizamos neste projeto, recomendamos visitar a <a href="https://vuejs.org" target="_blank">página oficial do Vue.js</a> em . Lá, você encontrará informações detalhadas, documentação e recursos que podem ajudá-lo a se aprofundar nessa incrível tecnologia.</p>
    </div>
    
    <ButtonsRow nextName="Vuetify" @next="nextPage" previousName="FrontEnd" @previous="previousPage"/>
</template>

<script setup>
import ButtonsRow from "./buttonsRow.vue";
import { defineEmits } from "vue";
const emit = defineEmits(["next", "previous"]);
const nextPage = () => {
  emit("next", "Vuetify");
};

const previousPage = () => {
    emit("previous", "frontEnd");
};
</script>

<style scoped>
a{
    color: #966cea;
    transition: all 0.5s ease;
}

a:hover{
    color:#469673;
    text-decoration: underline;
}
</style>