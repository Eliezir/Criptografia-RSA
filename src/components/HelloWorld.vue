<template>
  <v-row class="max-height ma-0 justify-center align-content-center align-center">
    <v-col cols="12" sm="5" class="pa-0 d-flex flex-column align-center">
      <div class="d-none d-sm-flex justify-center flex-column">
     <h1 class="text-h1 font-weight-bold mb-5" id="title">Desvendando a Criptografia RSA</h1>
      <h2 class="text-h6 font-weight-light mb-10">Explore os fundamentos da criptografia RSA, desde a geração de chaves até a criptografia e a descriptografia de mensagens.</h2>
        <a href="/start" id="btn"><span>Get Started</span></a>
      </div>
      <h1 class="text-center pa-5 text-h3 font-weight-bold d-flex d-sm-none">Desvendando a Criptografia RSA</h1>
    </v-col>
    <v-col cols="12" sm="5" class="pa-0 align-center d-flex flex-column">
      <v-img src="@/assets/hero.svg" class="hero-img my-5 w-75"></v-img>
      <div class="d-flex mt-10 d-sm-none">
        <a href="/start" id="btn"><span>Get Started</span></a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
</script>

<style >
.max-height {
  height: calc(90vh - 128px);
}

.hero-img {
  width: 90%;

}

#btn{
  color: rgba(256, 256, 256);
  border: 2px double transparent;
  border-radius: 10px;
  background-image: linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)), radial-gradient(circle at left top, rgb(174, 73, 241), #4b2e99);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  font-family: 'DM Sans', sans-serif;
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-weight: bold;
  width: 200px;
  transition: all 0.3s ease;
  text-decoration: none;
}



#btn:hover {
  box-shadow: rgba(111, 76, 255, 0.5) 0px 0px 20px 5px;
  transform: scale(1.05);
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