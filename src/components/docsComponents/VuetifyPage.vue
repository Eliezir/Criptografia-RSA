<template>
    <header>
        <h1 >Vuetify</h1>
    </header>
    <div class="my-5 d-flex flex-column align-center">
        <img style="width: 100%;" class="mb-5" src="@/assets/docs/vuetify-img.png"/>
        <p class="w-100 text-body-1 mb-3 "> Para dar vida à estética e ao design do nosso frontend Vue.js, utilizamos o Vuetify. O Vuetify é uma UI Library de código-aberto desenvolvido especificamente para o Vue.js. Ele oferece uma ampla gama de componentes prontos para uso, estilos de material design e uma série de recursos de personalização. Com o Vuetify, conseguimos criar uma interface de usuário moderna e coesa, com uma experiência de usuário visualmente atraente</p>
        <p class="w-100 text-body-1 mb-3 ">Uma das grandes vantagens do Vuetify é sua vasta biblioteca de componentes, que vão desde botões e barras de navegação até caixas de diálogo e ícones personalizáveis. Isso nos permitiu economizar tempo no desenvolvimento, concentrando-nos na funcionalidade do aplicativo!</p>
        <p class="w-100 text-body-1 mb-3 ">Se você deseja saber mais sobre como utilizamos o Vuetify ou explorar seus recursos, recomendamos visitar o <a href="https://vuetifyjs.com/en/" target="_blank">site oficial do Vuetify</a> para obter informações detalhadas e documentação completa</p>
    </div>
    
    <ButtonsRow previousName="Vue JS" @previous="previousPage"/>
</template>

<script setup>
import ButtonsRow from "./buttonsRow.vue";
import { defineEmits } from "vue";
const emit = defineEmits(["previous"]);

const previousPage = () => {
    emit("previous", "VueJS");
};
</script>

<style scoped>
a{
    color: #966cea;
    transition: all 0.5s ease;
}

a:hover{
    color: #1797f6;
    text-decoration: underline;
}
</style>