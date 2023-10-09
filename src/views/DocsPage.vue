<template>
    <v-navigation-drawer
        class="bg-background w-15 d-flex align-start"
      >
        <v-list>
          <v-list-item>
            <v-btn @click="page = 'rsa'" class="text-h6 pa-0 font-weight-bold w-100 d-flex justify-start" variant="text">
              Criptografia RSA
            </v-btn>
            <v-list>
              <v-list-item  @click="page = 'keyRSA'">
              <p class="text-subtitle-2 text-grey-lighten-1">Gerando uma chave</p>
              </v-list-item>
              <v-list-item  @click="page = 'crypting'">
              <p class="text-subtitle-2 text-grey-lighten-1">Criptografando mensagens</p>
              </v-list-item>
              <v-list-item @click="page = 'decrypting'">
              <p class="text-subtitle-2 text-grey-lighten-1">Descriptografando mensagens</p>
              </v-list-item>
            </v-list>
          </v-list-item>
          <v-list-item class="ma-0 pa-0 ml-2">
            <v-btn @click="page = 'API'" class="text-h6 pa-0 font-weight-bold w-100 d-flex justify-start" variant="text">
              API
            </v-btn>
            <v-list>
              <v-list-item  @click="page = 'frontEndConnection'">
              <p class="text-subtitle-2 text-grey-lighten-1">Conexão com o FrontEnd</p>
              </v-list-item> 
            </v-list>
          </v-list-item>
    
          <v-list-item class="ma-0 pa-0 ml-2">
            <v-btn @click="page = 'frontEnd'" class="text-h6 pa-0 font-weight-bold w-100 d-flex justify-start" variant="text">
             FrontEnd
            </v-btn>
            <v-list>
              <v-list-item  @click="page = 'VueJS'">
              <p class="text-subtitle-2 text-grey-lighten-1">VueJS</p>
              </v-list-item> 
              <v-list-item  @click="page = 'Vuetify'">
              <p class="text-subtitle-2 text-grey-lighten-1">Vuetify</p>
              </v-list-item> 
            </v-list>
          </v-list-item>
  
        </v-list>
      </v-navigation-drawer>
      <v-container>
        <DocsIndex v-if="page === 'index'" @previous="previousPage" @next="nextPage"/>
        <RSA v-if="page === 'rsa'" @previous="previousPage" @next="nextPage"/>
        <Key v-if="page === 'keyRSA'" @previous="previousPage" @next="nextPage"/>
        <CryptDocs v-if="page === 'crypting'" @previous="previousPage" @next="nextPage"/>
        <DecryptingDocs v-if="page === 'decrypting'" @previous="previousPage" @next="nextPage"/>
        <API v-if="page === 'API'" @previous="previousPage" @next="nextPage"/>
        <FrontEndConnection v-if="page == 'frontEndConnection'" @previous="previousPage" @next="nextPage"/>
        <FrontEnd v-if="page == 'frontEnd'" @previous="previousPage" @next="nextPage"/>
        <VuePage v-if="page == 'VueJS'" @previous="previousPage" @next="nextPage"/>
        <VuetifyPage v-if="page == 'Vuetify'" @previous="previousPage" @next="nextPage"/>
      </v-container>
</template>

<script setup>
import DocsIndex from "../components/docsComponents/IndexDocs.vue"
import RSA from "../components/docsComponents/CriptografiaRSA.vue"
import Key from "../components/docsComponents/KeyRsa.vue"
import CryptDocs from '../components/docsComponents/cryptMessage.vue'
import DecryptingDocs from '../components/docsComponents/decryptingMessage.vue'
import API from '../components/docsComponents/ApiPage.vue'
import FrontEndConnection from '../components/docsComponents/frontEndConnection.vue'
import FrontEnd from '../components/docsComponents/FrontEnd.vue'
import VuePage from '../components/docsComponents/VuePage.vue'
import VuetifyPage from "@/components/docsComponents/VuetifyPage.vue"
import { ref } from "vue";
const page = ref("index");

const nextPage = (newPage) => {
  page.value = newPage;
};

const previousPage = (newPage) => {
    page.value = newPage;
};
</script>

<style scoped>
.w-15{
    width: 15% !important;
    margin-left: 7.5% !important;
}

</style>
