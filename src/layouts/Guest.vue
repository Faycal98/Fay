<template>
  <v-app>
    <Navbar></Navbar>
    <v-main class="relative top-14">
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
