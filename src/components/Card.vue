<template>
  <v-card
    :color="course.color"
    class="text-white card-list lg:w-auto sm:w-36"
    max-height="140"
  >
    <v-card-title class="text-center text-white font-sans"
      ><h1 class="mx-auto px-3">
        {{ course.name }}
        <font-awesome-icon
          class="text-2xl pl-2 text-white"
          icon="fa-solid fa-folder-open"
        /></h1
    ></v-card-title>
  </v-card>
</template>
<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>

.card-list {
    min-height: 145px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
.v-card__title {
  word-break: normal;
}


@media only screen and (max-width: 600px) {
  h1 {
    font-size: 1.05rem;
    line-height: 24px;
  }
  .card-list {
    min-height: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .v-card__title {
    line-height: 20px;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    line-height: 2rem;
  
  }
}
</style>
