<template>
  <div class="overflow-hidden">
    <v-app-bar color="deep-purple flex items-center z-50 fixed w-full " dark>
      <v-toolbar-title
        class="lg:pl-4 lg:text-2xl sm:text-xl font-bold tracking-widest"
        >Title</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <div class="icon lg:px-5 sm:px-1">
        <router-link to="/">
          <font-awesome-icon
            class="text-2xl text-white"
            to="/about"
            icon="fa-solid fa-house"
          />
        </router-link>
      </div>

      <div class="icon  lg:px-5 sm:px-1">
        <router-link to="/shop">
          <font-awesome-icon
            class="text-2xl text-white"
            icon="fa-solid fa-shop"
          />
        </router-link>
      </div>

      <div class="icon lg:px-5 sm:px-1">
        <router-link to="/epreuves">
          <v-badge color="red" content="6" overlap>
            <font-awesome-icon
              class="text-2xl text-white"
              icon="fa-solid fa-file-lines"
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
    return {
      drawer: false,
      group: null,
    };
  },
  components: {
    Dropdown,
  },
};
</script>
<style scoped>

.v-toolbar__content{

width: 100%!important;

}
@media only screen and (max-width: 600px) {
  .icon{
    padding: 0 13px!important;
  }
  .icon-last{
    padding-left: 7px;
    display: flex;
  }
  .v-toolbar__content, .v-toolbar__extension {
  padding: 4px 12px;
}
}
</style>
