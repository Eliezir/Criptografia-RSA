<template>
    <v-navigation-drawer
        class="bg-background"
      >
        <v-list density="compact" nav>
          <v-list-item prepend-icon="?" title="O_que-e" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="chave" title="chaves" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="num" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="0101" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="locked" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-container>
        <DocsIndex v-if="page === 'index'" />
      </v-container>
</template>

<script setup>
import DocsIndex from "../components/docs/indexDocs.vue"
import { ref } from "vue";
const page = ref("index");
</script>