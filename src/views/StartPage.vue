<template>
    <TimeLine/>
<div class="d-flex fill-height flex-wrap justify-center  align-content-center bg-background " id="getStated">
    <Card msg="Gerar Chave" path="generate-key"/>
    <Card msg="Criptografar" path="crypto-message"/>
    <Card msg="Descriptografar" path="decrypt-message"/>
</div>

</template>

<script setup>
import TimeLine from '../components/RsaTimeLine.vue'
import Card from '../components/StartCards.vue'
</script>

<style scoped>
#getStated{
    gap:2.5%;
}
</style>