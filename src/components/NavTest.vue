<template>
  <div class="overflow-hidden fixed z-30">
    <v-app-bar
      color="#0284c7"
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
      <div class="nav-icon-container flex justify-end">
        <div class="icon lg:px-5 md:px-5 sm:px-1 text-2xl">
          <router-link to="/shop">
            <v-badge color="red" content="4" overlap>
              <font-awesome-icon
                class="text-2xl text-white"
                icon="fa-solid fa-shop"
              />
            </v-badge>
            <h2 class="inline lg:ml-1 md:ml-1 font-semibold text-white">
              Boutique
            </h2>
          </router-link>
        </div>
        <div
          class="icon lg:px-5 md:px-5 sm:px-1 text-2xl"
          v-if="$store.state.isAuth"
        >
          <router-link to="/epreuves">
            <v-badge color="red" content="6" overlap>
              <font-awesome-icon
                class="text-2xl text-white"
                icon="fa-solid fa-file-lines"
              />
            </v-badge>
            <h2 class="inline lg:ml-1 md:ml-1 font-semibold text-white">
              Epreuves
            </h2>
          </router-link>
        </div>
        <div
          class="icon lg:px-5 md:px-5 sm:px-1 text-2xl"
          v-if="$store.state.isAuth"
        >
          <router-link to="/panier">
            <v-badge color="red" content="6" overlap>
              <font-awesome-icon
                class="text-2xl text-white"
                icon="fa-solid fa-shopping-cart"
              />
            </v-badge>
            <h2 class="inline ml-1 font-semibold md:ml-1 text-white">Panier</h2>
          </router-link>
        </div>

        <div
          class="icon lg:px-5 md:px-5 sm:px-1 text-2xl cursor-pointer"
          v-if="$store.state.isAuth"
          @click="searchClicked"
        >
          <font-awesome-icon
            class="text-2xl text-white"
            icon="fa-solid fa-magnifying-glass"
          />
        </div>
      </div>

      <div class="icon-last lg:pl-3 sm:pl-1 text-2xl overflow-hidden">
        <Dropdown></Dropdown>
      </div>
    </v-app-bar>

    <div class="d">
      <input type="text" />
    </div>
  </div>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import Dropdown from "./Dropdown.vue";
export default {
  data: () => {
    return {
      clickStatus: false,
    };
  },
  components: {
    Dropdown,
    SearchInput,
  },

  methods: {
    searchClicked(){
      this.$emit("searchClicked")
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.width > 1162 ? false : true;
    },

    isMobile3() {
      return (
        this.$vuetify.breakpoint.width < this.$vuetify.breakpoint.thresholds.md
      );
    },
    status() {
      return this.isMobile && this.clickStatus;
    },
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
  .icon h2 {
    display: none;
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
