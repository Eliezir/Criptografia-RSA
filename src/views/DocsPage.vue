<template>
    <v-navigation-drawer
        class="bg-background"
      >
        <v-list>
          <v-list-item>
            <v-btn @click="page = 'rsa'" class="text-h6" variant="text">
              Criptografia RSA
            </v-btn>
            <v-list>
              <v-list-item  @click="page = 'keyRSA'">
              <p class="text-subtitle-2 text-grey-lighten-1">Gerando uma chave</p>
              </v-list-item>
              <v-list-item  @click="page = 'rsa'">
              <p class="text-subtitle-2 text-grey-lighten-1">Criptografando mensagens</p>
              </v-list-item>
              <v-list-item @click="page = 'rsa'">
              <p class="text-subtitle-2 text-grey-lighten-1">Descriptografando mensagens</p>
              </v-list-item>
            </v-list>
          </v-list-item>
          <v-list-item prepend-icon="chave" title="Conexão " value="myfiles"></v-list-item>
          <v-list-item prepend-icon="num" title="FrontEnd" value="myfiles"></v-list-item>
       <!--    <v-list-item prepend-icon="0101" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="locked" title="Starred" value="starred"></v-list-item> -->
        </v-list>
      </v-navigation-drawer>
      <v-container>
        <DocsIndex v-if="page === 'index'" @previous="previousPage" @next="nextPage"/>
        <RSA v-if="page === 'rsa'" @previous="previousPage" @next="nextPage"/>
        <Key v-if="page === 'keyRSA'" @previous="previousPage" @next="nextPage"/>
      </v-container>
</template>

<script setup>
import DocsIndex from "../components/docsComponents/IndexDocs.vue"
import RSA from "../components/docsComponents/CriptografiaRSA.vue"
import Key from "../components/docsComponents/KeyRsa.vue"
import { ref } from "vue";
const page = ref("index");

const nextPage = (newPage) => {
  page.value = newPage;
};

const previousPage = (newPage) => {
    page.value = newPage;
};
</script>