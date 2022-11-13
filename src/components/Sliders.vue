<template>
  <v-sheet>
    <v-tabs
    color="rgba(6, 95, 70,1)"
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab> 
        <font-awesome-icon
          icon="fa-solid fa-box"
          class="text-2xl mr-2 text-gray-500"
        />
        Tous nos produits </v-tab>
      <v-tab>
        <font-awesome-icon
          icon="fa-solid fa-mobile"
          class="text-2xl mr-2 text-gray-500"
        />
        Smartphones
      </v-tab>

      <v-tab> 
        <font-awesome-icon
          icon="fa-solid fa-burger"
          class="text-2xl mr-2 text-gray-500"
        />Aliments </v-tab>

        <v-tab> 
        <font-awesome-icon
          icon="fa-solid fa-burger"
          class="text-2xl mr-2 text-gray-500"
        />Autres </v-tab>
    </v-tabs>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    model: null,
  }),
};
</script>
