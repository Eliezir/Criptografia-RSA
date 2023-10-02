<template>
  <v-row class="max-height ma-0 justify-center align-content-center align-center">
    <v-col cols="12" sm="5" class="pa-0 d-flex flex-column align-center">
      <div class="d-none d-sm-flex justify-center flex-column">
     <h1 class="text-h1 font-weight-bold mb-5 text-justify" id="title">Criptografia RSA</h1>
      <h2 class="text-h6 font-weight-light mb-10">Aqui explicaremos o funcionamento da Criptografia RSA junto das tecnologias utilizadas no desenvolvimento desse projeto 😀</h2>
      </div>
      <h1 class="text-center pa-5 text-h3 font-weight-bold d-flex d-sm-none">Criptografia RSA</h1>
    </v-col>
    <v-col cols="12" sm="5" class="pa-0 align-center d-flex flex-column">
      <img src="@/assets/icon-rsa2.png" class="hero-img w-75"/>
      <div class="d-flex mt-10 d-sm-none">
      </div>
    </v-col>
  </v-row>
  <ButtonsRow nextName="O que é?" previousName="Home" nextPath="/docs/o_que_e" previousPath="/"/>
</template>

<script setup>
import ButtonsRow from "./buttonsRow.vue";
</script>

<style >
.max-height {
  height: calc(90vh - 128px);
}

.hero-img {
  width: 90%;

}


#title{
    text-wrap: balance;
}



@media (max-width:960px) {
    #title{
    font-size: 80px !important;
    line-height: 75px;
}
}
</style>