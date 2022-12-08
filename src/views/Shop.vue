<template>
  <v-container class="mt-5">
    <v-row no-gutters class="flex items-center">
      <v-col cols="12" sm="12" md="8" lg="7">
        <div class="sliders-content ml-3">
          <sliders @clicked="clicked"></sliders>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="4"
        lg="5"
        class="text-center flex lg:justify-end  md:justify-center md:mt-5 add-btn"
      >
        <v-btn
          :loading="loading3"
          :disabled="loading3"
          color="rgba(6, 95, 70,1)"
          class="ma-2 white--text btns"
          large
          @click="addProduct"
          v-if="$store.state.isAuth"
        >
          Ajouter produit
          <font-awesome-icon
            class="text-3xl text-white ml-1"
            icon="fa-solid fa-circle-plus"
          />
        </v-btn>
      </v-col>
    </v-row>
  
    <div>
      <v-row no-gutters class="flex items-center" v-if="getProduct.length > 0">
        <v-col
        
          v-for="product in getProduct"
          :key="product.id"
          class="flex justify-center items-center mt-6 product-row"
          md="4"
          lg="3"
          sm="6"
          cols="10"
        >
          <Product :product-props="product"></Product>
        </v-col>
      </v-row>
      <v-row no-gutters class="flex items-center" v-else>
        <v-col md="12" lg="12"  cols="12" class="flex justify-center h-80 items-center">
          <h1 class="lg:text-4xl text-2xl">Aucun résultat trouvé</h1>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import Product from "../components/Product.vue";
import Sliders from "../components/Sliders.vue";
export default {
  data: () => ({
    loading3: false,
    currentTab: "",
  }),
  mounted() {
    this.currentTab = "Tous nos produits";
  },
  components: {
    Product,
    Sliders,
  },
  methods: {
    clicked(chosenTag) {
      this.currentTab = chosenTag;
    },
    addProduct() {
      this.$router.push("/registration");
    },
  },
  computed: {
    getProduct() {
      return this.$store.getters.getProductByCategory(this.currentTab);
    },
  },
};
</script>
<style scoped>
h1 {
  font-weight: 700;
}
.product-row{
  padding: 0 0.75rem!important;
}
.sliders-content {
  width: 94%;
}
@media only screen and (max-width: 898px) {
  .product-card:not(:first-child) {
    width: 90%;
    margin-top: 5rem;
  }

  .product-row {
    margin: 0px auto;
  }
  .btns {
    position: static !important;
    left: 0px !important;
  }
  .sliders-content {
    width: 100%;
  }
  .add-btn {
    margin-top: 2rem;
    justify-content: center !important;
  }
  .product__title {
    font-size: 19px !important;
  }
  .product_image {
    margin-bottom: 5px;
  }
}
</style>
