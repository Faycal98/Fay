<template>
  <v-app>
    <Navbar></Navbar>
    <v-main class="relative top-14">
      <transition name="fade">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style>
.fade-enter-active,.fade-leave-active{
  transition: opacity .4s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}

/* .slide-fade-enter-active{
  transition: all .3s ease;
}

.slide-fade-leave-active{
  transition: all .8s cubic-bezier(1.0,0.5,0.8,1.0);
}

.slide-fade-enter,.slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
} */
</style>
