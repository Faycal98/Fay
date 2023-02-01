<template>
  <v-container>
    <v-row no-gutters class="flex justify-around">
      <v-col cols="12" sm="1" lg="3" >
        
      </v-col>
    
      <v-col cols="12" sm="10" lg="5">
     <div class="post-container ">
      <home-card></home-card>
     </div>
      </v-col>
      <v-col cols="12" sm="1" lg="3">
        <v-card class="pa-2 sidebar"  outlined tile> One of three columns </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import HomeCard from '../components/HomeCard.vue';
export default{
data() {
  return {
    
  }
},
components:{
  HomeCard,

}
}
</script>
<style scoped>
@media only screen and (max-width: 898px) {

  .sidebar{
    display: none;
  }
}

</style>