<template>
  <v-card :color="course.color" class="text-white card-list lg:w-auto sm:w-36">
    <v-card-title class="text-center text-white font-sans"><h1 class="mx-auto">{{course.name}}</h1></v-card-title>

    <v-card-actions>
      <v-spacer> </v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
   course : {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  h1{
    font-size: 1.05rem;
  }
}
  
</style>
