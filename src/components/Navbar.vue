<template>
 
 <v-row>
  <v-col  sm="12" md="6">
    
  <div class="d-flex align-center nav-item pl-4 mb-4">
    <div class="image-container d-flex">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
    </div>
   
        <v-avatar color="red"   class="shrink mt-1 hidden-and-down">
        <span class="white--text text-h5">CJ</span>
      </v-avatar>
      </div>

  </v-col>
<v-col  sm="12" md="6">
    <div class="nav-container">
      <ul class="nav-list">
        <li>
          <router-link to="/about">
            <v-icon large> mdi-home </v-icon>Home
          </router-link>
        </li>
          
        <li ><v-icon large :to="abo"> mdi-shopping</v-icon>Boutique</li>
        <li><v-icon large> mdi-message-text </v-icon>Epreuve</li>
        <li><v-icon large> mdi-arrow-up-bold-box-outline</v-icon>Jeux</li>
       
      </ul>
    
    </div>
  </v-col>
 </v-row>



    
   
  
    

 
</template>
<script>
export default {
  data() {
    return {
      abo:'/about'
    }
  },
};
</script>
<style scoped>
  .nav{
    background: rebeccapurple;
    padding: 0px 10px 10px 10px;
  }

  li{
    cursor: pointer;
  }
  .nav-item{
    justify-content: space-between;
  }
.nav-list {
  list-style-type: none;
  display: flex;
}

.nav-container{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
ul li{
  padding: 0 20px;
  display: flex;
  align-items: center;
}
.v-application ul, .v-application ol {
 padding: 0px;
}

@media only screen and (max-width: 600px) {
.nav-list li{
  display: flex;
  flex-direction: column;
  font-size: 13px;
  cursor: pointer;
}
.container{
  display: contents;
}
}
</style>
