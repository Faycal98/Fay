<template>
  <div class="overflow-hidden">
    <v-app-bar color="deep-purple flex items-center w-full" dark>
      <v-toolbar-title
        class="lg:pl-4 lg:text-2xl sm:text-xl font-bold tracking-widest"
        >Title</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <div class="icon px-5">
        <router-link to="/">
          <font-awesome-icon
            class="text-2xl text-white"
            to="/about"
            icon="fa-solid fa-house"
          />
        </router-link>
      </div>

      <div class="icon px-5">
        <router-link to="/shop">
          <font-awesome-icon
            class="text-xl text-white"
            icon="fa-solid fa-shop"
          />
        </router-link>
      </div>

      <div class="icon px-5 l">
        <router-link to="/epreuves">
          <v-badge color="green" content="6" overlap>
            <font-awesome-icon
              class="text-xl text-white"
              icon="fa-solid fa-file-lines"
            />
          </v-badge>
        </router-link>
      </div>
      <div class="icon px-5 text-2xl">
        <font-awesome-icon icon="fa-solid fa-power-off" />
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style>
.v-toolbar__content {
  width: 100%;
}
</style>
