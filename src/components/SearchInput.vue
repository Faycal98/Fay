<template>
  <div class="overflow-hidden fixed z-30">
    <v-app-bar
      color="#0284c7"
      class="w-full z-50 fixed"
      elevate-on-scroll
      dark
      height="55"
    >
      <router-link to="/">
        <v-toolbar-title
          class="lg:pl-4 lg:text-2xl sm:text-2xl font-bold tracking-widest text-white"
        >
          <font-awesome-icon
            class="text-3cxl text-white mr-1"
            icon="fa-solid fa-square-h"
          />-Blog</v-toolbar-title
        >
      </router-link>
      <v-spacer></v-spacer>
      <div class="input-container rounded-md flex items-center w-5/6">
        <font-awesome-icon
          class="text-2xl text-black mr-1 ml-2"
          icon="fa-solid fa-magnifying-glass"
        />
        <input type="text" name="" id="" class="w-full" />
        <font-awesome-icon 
          class="text-3xl text-black mr-1 cursor-pointer"
          @click="closeSearch"
          icon="fa-solid fa-xmark"
        />
      </div>
    </v-app-bar>

    <div class="d">
      <input type="text" />
    </div>
  </div>
</template>
<script>
export default{
  methods: {
    closeSearch(){
      this.$emit("closeSearch")
    }
  },
}
</script>
<style scoped>
.form-container {
  border: 1px solid black;
  border-radius: 9px;
}

input {
  outline: none;

}
.input-container {
  width: 70%;
  box-shadow: 0 0 5px white;
  animation-name: fade;
  animation-duration: .6s;
}

@keyframes fade {
  0%{
    width: 0%;
  }

 
 
  100%{
    width:70% ;
  }
}


@media only screen and (max-width: 898px) {
  .input-container {
    padding: 4px;
    width: 54%;
  }

 /*  rgba(6, 95, 70,1) */

  input {
    padding: 1px;
  
  }
}



</style>
