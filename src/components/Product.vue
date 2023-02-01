<template>
  <div class="product-card">
    <div class="badge">Hot</div>
    <div class="product-tumb relative">
      <img
        :src="require(`../assets/images/${productProps.img}`)"
        alt=""
        width="100%"
      />
      <div class="like-container absolute">
        <font-awesome-icon
          icon="fa-solid fa-heart"
          class=" text-gray-500"
          :class="{ 'text-red-500': liked ,'text-2xl':!isMobile}"
          @click="clicked"
          :beat="beatStatus"
        />
      </div>
    </div>
    <div class="product-details">
      <div class="product-name flex items-center gap-2 mb-6 justify-between">
        <h4>
          <a href="#">{{ productProps.name }}</a>
        </h4>
        <v-rating
          v-model="rating"
          color="orange"
          dense
          :size="getSize($vuetify.breakpoint.width)"
          half-increments
          background-color="orange lighten-3"
        ></v-rating>
      </div>

      <div class="product-bottom-details flex">
        <div class="product-price">
          {{ productProps.price }} <span>Fcfa</span>
        </div>
        <router-link
          :to="{
            name: 'productDetail',
            params: { product: productProps.name, id: productProps.id },
          }"
        >
          <div class="product-links font-sans bg-blue-500 text-white">
            Acheter
            <font-awesome-icon
              class="text-white ml-1"
              icon="fa-solid fa-shopping-cart"
            />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "../plugins/moment";
export default {
  props: {
    productProps: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rating: 3,
      liked: false,
      beatStatus: false,
    };
  },
  methods: {
    getSize(value) {
      if (value > 500) {
        return 17;
      } else {
        return 11;
      }
    },
    currentDateTime() {
      return moment().startOf("hour").fromNow();
    },
    clicked() {
      this.liked = !this.liked;
      this.beatStatus = !this.beatStatus;
      if (this.beatStatus) {
        setTimeout(() => {
          this.beatStatus = false;
        }, 1900);
      }
    },
  },
  computed:{
    isMobile(){
      return this.$vuetify.breakpoint.width<1000
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.badge {
  z-index: 20;
}
a {
  text-decoration: none;
}
.product-card {
  width: 320px;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  border-radius: 6px;
  background: #fafafa;
  transition: transform 0.5s;
}

/* .product-card:hover{
  transform: scale(1.1);
} */
.badge {
  position: absolute;
  left: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: red;
  color: #fff;
  padding: 3px 10px;
}

.like-container {
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);
  width: 40px;
  cursor: pointer;
  height: 40px;
  padding: 20px;
  bottom: -20px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 20px;
}
.hour {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 5px 10px;
  border-radius: 22px;

  border: 1px solid #eee;
}
.product-tumb {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 6px;
  background: #f0f0f0;
}

.product-tumb img {
  max-width: 100%;
  max-height: 100%;
  height: 200px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.product-details {
  padding: 30px 14px;
}

.buy {
  border: 1px solid red;
  display: flex;
}
.product-catagory {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
  margin-bottom: 18px;
}

.product-details h4 a {
  font-weight: 500;
  display: block;
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;

  /*  color: #6f8596; */
  color: black;
  text-decoration: none;
}

.product-details p {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 18px;
  color: #999;
}

.product-bottom-details {
  overflow: hidden;
  border-top: 1px solid #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
}

.product-price {
  font-size: 18px;
  color: #fbb72c;
  font-weight: 600;
}

.product-price small {
  font-size: 80%;
  font-weight: 400;
  text-decoration: line-through;
  display: inline-block;
  margin-right: 5px;
}

.product-links {
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 6px;
}

.product-links a {
  display: inline-block;
  margin-left: 5px;
  color: #e1e1e1;
  transition: 0.3s;
  font-size: 17px;
}

.product-links a:hover {
  color: #fbb72c;
}

@media only screen and (max-width: 1000px) {
  .like-container[data-v-3cf4ef6f] {
    width: 20px;
    height: 40px;
    padding: 17px;
    bottom: -20px;
    right: 10px;
    height: 20px;
  }

  .product-details {
    padding: 8px 7px;
  }

  .product-bottom-details {
    padding-top: 12px;
  }
  .product-price {
    font-size: 13px;
  }

  .product-card {
    width: 172px;
  }
  .product-links {
    padding: 8px;
    font-size: 12px;
    margin-left: 5px;
  }
  .product-tumb img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    height: 107px !important;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .product-name {
    margin-top: 0.6rem;
    margin-bottom: 5px !important;
    align-items: baseline;
  }
  .product-details h4 a {
    font-weight: 500;
    font-size: 12px !important;
    line-height: 22px;
  }

  .badge {
    font-size: 9px;
  }
}
</style>
