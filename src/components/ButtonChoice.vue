<template lang="">
  <button @click="$emit('clicked')">{{ msg }}</button>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
button {
  margin-top: 20px;
  width: 300px !important;
  min-width: 300px !important;
  font-size: 17px;
  border-radius: 10rem;
  line-height: 39px;
  background-color: rgb(2, 132, 199);
  max-height: 40px;
  color: white;
  font-weight: 500;
  border-color: transparent;
  margin: 40px 0px 30px;
}
</style>
