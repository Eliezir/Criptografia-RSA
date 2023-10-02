<template>
  <v-container class="fill-height w-100 d-flex align-center">
    <v-timeline
      :direction="size >= 600 ? 'horizontal' : 'vertical'"
      color="white"
      theme="dark"
      :side="size >= 600 ? '' : 'end' "
      line-thickness="5"
    >
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        size="45px"
        fill-dot
      >
        <v-card>
          <v-card-title :class="['text-h5', `bg-${item.color}`]">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="bg-background pa-5 card-text text-body-1 text-white">
            {{ item.text }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <a class="scrollDown bounce d-none d-sm-flex" href="#getStated">
      <v-icon size="50px"> mdi-arrow-down-thick </v-icon>
    </a>
  </v-container>
</template>
<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { name } = useDisplay();
const size = computed(() => {
  switch (name.value) {
    case "xs":
      return 220;
    case "sm":
      return 400;
    case "md":
      return 500;
    case "lg":
      return 600;
    case "xl":
      return 800;
    case "xxl":
      return 1200;
  }
  return undefined
});


const items = [
  {
    color: "purple-darken-4",
    icon: "mdi-numeric-1",
    title: "Gerar Chave",
    text: "O primeiro passo na criptografia RSA é gerar uma chave pública e privada. A chave pública é usada para criptografar a mensagem e só pode ser descriptografada com a chave privada correspondente. A chave privada é usada para descriptografar a mensagem criptografada.",
  },
  {
    color: "purple-darken-4",
    icon: "mdi-numeric-2",
    title: "Criptografar",
    text: "O segundo passo é criptografar a mensagem usando a chave pública. Nesse processo, a mensagem original é transformada em um código criptografado, que só pode ser decifrado com a chave privada correspondente. Isso garante que apenas o destinatário autorizado possa ler o conteúdo da mensagem!",
  },
  {
    color: "purple-darken-4",
    icon: "mdi-numeric-3",
    title: "Descriptografar",
    text: "O terceiro passo é descriptografar a mensagem criptografada usando a chave privada. Apenas a chave privada correta, que deve ser mantida em segredo, é capaz de realizar a descriptografia com sucesso. Esse processo permite que o destinatário recupere a mensagem original, compreendendo o conteúdo que foi enviado de forma segura e protegida.",
  },
];
</script>

<style scoped>
.scrollDown {
  position: absolute;
  bottom: 15%;
  right: 10%;
  transform: translate(-50%, -50%);
  animation: animate 2s infinite;
  color: #9575cd;
  filter: drop-shadow(0 0 10px #5937b6);
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

.card-text {
  line-height: 1.3 !important;
  text-wrap: balance !important;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
