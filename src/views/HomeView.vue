<template>
  <div class="d">
    <hello-world />
    <gallery></gallery>
  </div>

</template>

<script>

  import HelloWorld from '../components/HelloWorld'
import Gallery from '../components/Gallery.vue';
  export default {
    name: 'Home',

    components: {
      HelloWorld,
      Gallery
   
    },
  }
</script>
