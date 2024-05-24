<template>
  <v-app>
    <HeaderComponent />
    <v-main class="app">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
.app {
  background-color: rgb(255, 255, 255);
}

input,
select,
textarea {
  color: #000000;
}

form,
select,
label {
  color: #000000;
}
</style>
