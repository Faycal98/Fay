<template>
  <v-container>
    <p class="font-sans text-3xl">Listes de filières</p>
    <v-row>
      <v-col v-for="course in $store.state.courses" :key="course.id" sm="4" md="4">
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
<style lang=""></style>
