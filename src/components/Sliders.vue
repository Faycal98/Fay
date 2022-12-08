<template>
  <v-sheet>
    <v-tabs
      color="rgba(6, 95, 70,1)"
      v-model="tab"
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab v-for="item in items" :key="item.id" @click="clicked(item.id)">
        <font-awesome-icon
          :icon="item.icon"
          class="text-2xl mr-2 text-gray-500"
          :key="item.name"
        />
        {{ item.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.id"> </v-tab-item>
    </v-tabs-items>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    tab: null,
    items: [
      {
        name: "Tous nos produits",
        icon: "fa-solid fa-box",
        id:0
      },
      {
        name: "Smartphones",
        icon: "fa-solid fa-mobile",
        id:1
      },
      {
        name: "Aliments",
        icon: "fa-solid fa-burger",
        id:2
      },
      {
        name: "Autres",
        icon: "fa-solid fa-burger",
        id:3
      },
    ],
    currentChoice: 'Tous nos produit'
  }),
  methods: {
    clicked(id) {
      let choice =  this.items[id].name
      this.currentChoice = this.items[id].name
      this.$emit('clicked',choice)
      /*let categ = this.items[index].name;
      this.$store.getters.getProductByCategory(categ));*/
    }
  },
};
</script>
