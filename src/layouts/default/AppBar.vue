<template>
  <v-app-bar
    id="navbar"
    color="background"
    class="elevation-0 flat  align-self-center d-flex"
  >


    <div class="d-none d-sm-flex align-center justify-space-between w-100">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon href="/">
          <img src="../../assets/icon-rsa2.png" class="w-100" />
        </v-app-bar-nav-icon>
        <v-app-bar-title>RSA</v-app-bar-title>
      </div>

    <div class="d-flex justify-center align-center navbar-default">
      <a
        class="nav-link"
        v-for="page in pages"
        :key="page.name"
        :href="page.path"
        >{{ page.name }}</a
      >
    </div>
      <a href="https://github.com/Eliezir/Criptografia-RSA" target="_blank" class="icons">
        <v-icon>mdi-github</v-icon>
      </a>
    </div>


    <div class="d-flex d-sm-none justify-space-between w-100 align-center">
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        size="70"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-nav-icon href="/">
          <img src="../../assets/icon-rsa2.png" class="w-100" />
        </v-app-bar-nav-icon>
        <a href="https://github.com/Eliezir" target="_blank" style="width: 70px;" class="d-flex justify-center">
        <v-icon>mdi-github</v-icon>
      </a>
    </div>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="top"
    temporary
    elevation="0"
    class="bg-background d-flex d-sm-none"
  >
    <v-list variant="elevated">
      <v-list-item
        v-for="page in pages"
        :key="page.name"
        :to="page.path"
        elevation="0"
        class="bg-background"
      >
        <v-list-item-title class="font-weight-bold text-uppercase text-white">
          {{ page.name }}</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
const pages = [
  {
    name: "Docs",
    path: "/docs",
  },
  {
    name: "Gerar Chave",
    path: "/generate-key",
  },
  {
    name: "Criptografar",
    path: "/crypto-message",
  },
  {
    name: "Descriptografar",
    path: "/decrypt-message",
  },
];

const drawer = ref(false);
</script>

<style>
.navbar-default {
  gap: 5px;
}
a {
  text-decoration: none;
  color: rgb(170, 170, 170);
  transition: all ease 0.5s;
  font-weight: bold;
}

.nav-link {
  display: inline-block;
  list-style: none;
  padding: 0 10px;
  margin: 0 20px;
  cursor: pointer;
  position: relative;
}

.nav-link::after {
  content: "";
  width: 0;
  height: 3px;
  background: #966cea;
  position: absolute;
  left: 0;
  bottom: -10px;
  transition: 0.5s;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #e6e6e6;
}

#navbar {
  left: 7.5% !important;
  width: 85% !important;
}

.icons{
  font-size: 20px;
  transition: all ease-in 0.2s;
}

.icons:hover{
  transform: scale(1.2);
  color:#966cea;
}

@media screen and (max-width: 960px) {
  #navbar {
    left: 0 !important;
    width: 100% !important;
  }
}
</style>
