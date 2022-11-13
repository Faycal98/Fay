<template>
  <div class="overflow-hidden fixed z-30">
    <v-app-bar
      color="rgba(6, 95, 70,1)"
      class="w-full z-50 fixed"
      elevate-on-scroll
      dark
    >
      <router-link to="/">
        <v-toolbar-title
          class="lg:pl-4 lg:text-2xl sm:text-2xl font-bold tracking-widest text-white"
        >
          <font-awesome-icon
            class="text-3xl text-white mr-1"
            icon="fa-solid fa-square-h"
          />-Blog</v-toolbar-title
        >
      </router-link>
      <v-spacer></v-spacer>
      <!--  <div class="icon lg:px-5 md:px-5 sm:px-1">
      
          
            <font-awesome-icon
              class="text-2xl text-white"
              icon="fa-solid fa-search"
            />
         
     
      </div> -->
      <div class="icon lg:px-5 md:px-5 sm:px-1">
        <router-link to="/shop">
          <v-badge color="red" content="4" overlap>
            <font-awesome-icon
              class="text-2xl text-white"
              icon="fa-solid fa-shop"
            />
          </v-badge>
        </router-link>
      </div>
      <div class="icon lg:px-5 md:px-5 sm:px-1" v-if="$store.state.isAuth">
        <router-link to="/epreuves">
          <v-badge color="red" content="6" overlap>
            <font-awesome-icon
              class="text-2xl text-white"
              icon="fa-solid fa-file-lines"
            />
          </v-badge>
        </router-link>
      </div>
      <div class="icon lg:px-5 md:px-5 sm:px-1" v-if="$store.state.isAuth">
        <router-link to="/panier">
          <v-badge color="red" content="6" overlap>
            <font-awesome-icon
              class="text-2xl text-white"
              icon="fa-solid fa-shopping-cart"
            />
          </v-badge>
        </router-link>
      </div>
      <div class="icon-last lg:pl-3 sm:pl-1 text-2xl overflow-hidden">
        <Dropdown></Dropdown>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  data: () => {
    return {};
  },
  components: {
    Dropdown,
  },
};
</script>
<style scoped>
.v-toolbar__content {
  width: 100% !important;
}
@media only screen and (max-width: 769px) {
  .icon {
    padding: 0 10px !important;
  }
  .icon-last {
    display: flex;
  }
  .v-toolbar__content,
  .v-toolbar__extension {
    padding: 4px 7px;
  }
}
</style>
