<template>
  <a class="gradient-border d-flex justify-center align-center" :href="path">
    <span id="box" class="d-flex justify-center align-center">
      <p id="card-text" class="text-h4 text-sm-h2">
        {{ CardText }}
      </p>
    </span>
  </a>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  msg: String,
  path: String,
});

const CardText = ref(props.msg);
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap');
:root {
  --borderWidth: 15px;
  --height: 300px;
  --width: 400px;
  --gradient:
  45deg,
  hsl(223deg 68% 10%) 0%,
  hsl(261deg 76% 50%) 40%, 
  hsl(266deg 98% 70%) 70%, 
  hsl(270deg 27% 94%) 100%; 
}


#box {
  width: var(--width);
  height: var(--height);
  color: white;
  font-family: "Raleway";
  font-size: 2.5rem;
  z-index: 1;
  background-color: #0c0c0d;
  border-radius: var(--borderWidth);
}

.gradient-border {
  height: calc(var(--height) + var(--borderWidth));
  width: calc(var(--width) + var(--borderWidth));
  border-radius: var(--borderWidth);
  background-image: linear-gradient(var(--gradient));
  transition: all ease 0.5s;
  background-size: 300% 300%;
}

.gradient-border:hover {
  animation: animatedgradient 6s ease alternate infinite;
  transform: scale(1.05);
  cursor: pointer;
}

#card-text {
  font-weight: bold;
  transition: all ease 2s;
  font-family: 'Oswald', sans-serif !important;
}

.gradient-border:hover #card-text {
  background: linear-gradient(var(--gradient));
  background-size: 300% 300%;
  animation: animatedgradient 6s ease alternate infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes animatedgradient {
  0% {
    background-position: 20% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 20% 50%;
  }
}

@media (max-width: 960px) {
  :root {
    --borderWidth: 5px;
    --height: 200px;
    --width: 300px;
  }
}
</style>
