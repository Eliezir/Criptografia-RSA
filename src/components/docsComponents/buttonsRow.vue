<template>
    <v-container class="d-flex justify-space-between">
      <a   @click="previousClicked()">
        <div v-if="previousName" color="white" class="bg-grey-darken-4 py-1 px-5 rounded button-previous button">
          <p class="font-weight-light text-caption text-grey-lighten-2 text-left">
            Voltar
          </p>
          <p class="text-subtitle-2 text-grey-dark-5 text-center">
            {{ previousName }}
          </p>
        </div>
      </a>
      <a @click="nextClicked()">
        <div  v-if="nextName" color="white" class="bg-grey-darken-4 py-1 px-5 rounded button-next button">
          <p class="font-weight-light text-caption text-grey-lighten-2 text-right">
            Próximo
          </p>
          <p class="text-subtitle-2 text-grey-dark-5 text-center">
            {{ nextName }}
          </p>
        </div>
      </a>
    </v-container>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    nextName: String,
    previousName: String,
    nextPath: String,
    previousPath: String,
  });
  
  const nextName = ref(props.nextName);
  const previousName = ref(props.previousName);

  
  const emit = defineEmits(['next', 'previous']);
  
  const nextClicked = () => {
    emit('next'); 
  };
  
  const previousClicked = () => {
    emit('previous'); 
  };
  </script>
  
  <style scoped>


.button{
    min-width: 100px;        
    cursor: pointer;
}
</style>