<template>
<v-container class="d-flex  justify-space-between">
    <a :href="previousPath" v-if="previousName" >
        <div color="white" class="bg-grey-darken-4 py-1 px-5 rounded" style="width: 100px;">
            <p class="font-weight-light text-caption text-grey-lighten-2 text-left">
            Voltar
            </p>
            <p class="text-subtitle-2 text-grey-dark-5 text-center">
            {{previousName}}
            </p>
        </div>
    </a>
    <a :href="nextPath" v-if="nextName" >
        <div color="white" class="bg-grey-darken-4 py-1 px-5 rounded" style="width: 100px;">
            <p class="font-weight-light text-caption text-grey-lighten-2 text-right">
            Proximo
            </p>
            <p class="text-subtitle-2 text-grey-dark-5 text-center">
            {{nextName}}
            </p>
        </div>
    </a>
</v-container>
</template>

<script setup>
import {ref} from 'vue';
const props = defineProps({
    nextName: String,
    previousName: String,
    nextPath: String,
    previousPath: String,
});

const nextName = ref(props.nextName);
const previousName = ref(props.previousName);
const nextPath = ref(props.nextPath);
const previousPath = ref(props.previousPath);
</script>