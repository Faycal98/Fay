<template>
  <v-container class="mt-5">
    <h1 class="ml-8 text-xl">
      <font-awesome-icon
        icon="fa-solid fa-rss"
        class="text-2xl text-gray-500 font-bold mr-3"
      />Fil d'actualité
    </h1>
    <v-row no-gutters class="mt-'' flex items-center">
      <v-col
        v-for="product in products"
        :key="product.id"
        class="flex justify-center items-center mt-6 mx-auto"
        md="4"
        sm="6"
        cols="10"
      >
        <Product :product-props="product"></Product>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Product from "../components/Product.vue";
export default {
  data: () => ({
    products: [
      {
        name: "Samsung S21",
        img: "S21.jpg",
        price: 400000,
        id: 0,
      },
      {
        name: "Samsung S21",
        img: "1200x-1.jpg",
        price: 300000,
        id: 1,
      },
      {
        name: "nike.jpg",
        img: "nike.jpg",
        price: 30000,
        id: 2,
      },

      {
        name: "ducati",
        img: "Streetfighter.jpg",
        price: 3000000,
        id: 4,
      },
      {
        name: "PS5",
        img: "ps5.jpg",
        price: 500000,
        id: 5,
      },
      {
        name: "Iphone 13",
        img: "p10.jpg",
        price: 400000,
        id: 6,
      },
      {
        name: "SAO",
        img: "sao.jpeg",
        price: 4000,
        id: 7,
      },
      {
        name: "Mirai nikki",
        img: "mirai.jpeg",
        price: 2300,
        id: 8,
      },
    ],
  }),
  components: {
    Product,
  },
};
</script>
<style scoped>
h1 {
  font-weight: 700;
}
@media only screen and (max-width: 600px) {
  .product-card:not(:first-child) {
    width: 100%;
    margin-top: 3rem;
  }
  .product__title {
    font-size: 19px !important;
  }
  .product_image {
    margin-bottom: 5px;
  }
}
</style>
