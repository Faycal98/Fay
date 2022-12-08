<template>
  <v-container>
    <div class="t flex flex-row items-center justify-center">
      <div
        class="border-3 border-red-500 border-solid h-1 mr-2 mt-2 bg-red-500 borders"
      ></div>
      <p class="font-sans text-4xl my-6 text-center">
        Liste des filières
        <font-awesome-icon
          class="text-4xl text-black"
          icon="fa-solid fa-graduation-cap"
        />
      </p>
      <div
        class="border-3 border-red-500 border-solid h-1 ml-2 mt-2 bg-red-500 borders"
      ></div>
    </div>

    <v-row>
      <v-col
        v-for="course in $store.state.courses"
        :key="course.id"
        sm="4"
        md="4"
      >
        <router-link
       
          :to="{
            name: 'courseList',
            params: { course: course.name, id: course.id },
          }"
        >
          <Card :course="course"></Card>
        </router-link>
      </v-col>
    </v-row>
    <h3>Contribuer en ajoutant d'autre epreuves</h3>
  </v-container>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  data() {
    return {
      red: "red",
      colors: [
        "#2196F3",
        "#3F51B5",
        "#673AB7",
        "#00BCD4",
        "#4CAF50",
        "#FF9800",
        "#757575",
      ],
      indigo: "#3F51B5",
    };
  },
  components: {
    Card,
  },
};
</script>
<style scoped>
.borders {
  width: 36.33%;
}
@media only screen and (max-width: 600px) {
  p {
    font-size: 25px;
  }
  .borders {
    width: 14%;
  }
}
</style>
