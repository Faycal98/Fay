<template>
  <div class="">
    <Navbar v-if="!clickedStatus"  @searchClicked="clicked"></Navbar>
   <search-input v-else @closeSearch="clicked"></search-input>
  </div>
</template>
<script>
import Navbar from './NavTest.vue';
import SearchInput from './SearchInput.vue';

export default {
  data() {
    return {
      clickedStatus: false,
      ratings: 3,
    }
  },
  components:{
    Navbar,
    SearchInput
  },
  methods: {
    clicked() {
      this.clickedStatus = !this.clickedStatus;
    },
  },
 
};
</script>
<style scoped>
input {
  border: 1px solid black;
}
</style>
