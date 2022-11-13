<template>
  <button
    @click="clicked"
    type="submit"
    class="w-full mb-4 mt-4 font-bold text-xl text-white py-5 tw-rounded bg-light-green validate"
  >
    {{ msg }}
  </button>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  methods: {
    clicked() {
      this.$emit("clicked");
      
    },
  },
};
</script>
<style scoped>
button {
  color: white;
}

@media only screen and (max-width: 600px) {
  .validate {
    font-size: 1rem;
    padding:16px 0 18px!important;
  }
  
}
</style>
