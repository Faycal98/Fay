<template>
  <v-container class="mt-5">
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
        <div class="sliders-content mx-auto">
          <sliders></sliders>
        </div>
      </v-col>
      <v-col cols="12" md="4"  class="text-center add-btn">
        <v-btn
          :loading="loading3"
          :disabled="loading3"
          color="rgba(6, 95, 70,1)"
          class="ma-2 white--text btns"
          large
          @click="loader = 'loading3'"
        >
          Ajouter produit
          <font-awesome-icon
            class="text-3xl text-white ml-1"
            icon="fa-solid fa-circle-plus"
          />
          <font-awesome-icon icon="fa-regular fa-circle-plus" />
        </v-btn>
      </v-col>
    </v-row>

    <v-row no-gutters class="flex items-center">
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
import Sliders from "../components/Sliders.vue";
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
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
  components: {
    Product,
    Sliders,
  },
};
</script>
<style scoped>
h1 {
  font-weight: 700;
}
.btns{
  position: relative;
  left:4.3rem;
}
.sliders-content {
  width: 86%;
}
@media only screen and (max-width: 600px) {
  .product-card:not(:first-child) {
    width: 100%;
    margin-top: 3rem;
  }

  .btns{
  position: static;
  left:0px;
}
  .sliders-content {
    width: 100%;
  }
  .add-btn {
    margin-top: 2rem;
  }
  .product__title {
    font-size: 19px !important;
  }
  .product_image {
    margin-bottom: 5px;
  }
}
</style>
