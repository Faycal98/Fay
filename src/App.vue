<template>
  <v-app>
<Navbar></Navbar>
    <v-main>
     <Dropdown></Dropdown>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Dropdown from './components/Dropdown.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
components:{
    Navbar,
    Dropdown
 
},
  data: () => ({
    //
  }),
};
</script>
<style>
  .v-toolbar__content{

width: 100%!important;

}
</style>