<template>
  <v-container>
    <p class="font-sans text-3xl">Listes de filières</p>
    <v-row>
      <v-col v-for="course in courses" :key="course.id" sm="4" md="4">
        <Card :course="course"></Card>
      </v-col>
    
    </v-row>
  </v-container>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  data() {
    return {
      courses: [
        {
          name: "Electronique",
          color: "#FF5722",
          id: 0,
        },
        {
          name: "Génie Télécoms et TIC",
          color: "#757575",
          id: 1,
        },
        {
          name: " Informatique Industrielle et Maintenance",
          color: "#FF9800",
          id: 2,
        },
        {
          name: "Banques Finances et Assurances",
          color: "#4CAF50",
          id:3
        },
        {
          name: "Action Commerciale et Force de Vente ",
          color: "#00BCD4",
          id:4
        },
        {
          name: "Electronique",
          color: "#673AB7",
          id:5
        },
        {
          name: "Commerce International ectronique",
          color: "#3F51B5",
          id:6
        },
        {
          name: " Informatique de Gestion",
          color: "#2196F3",
          id:7
        },
        {
            name: "Audit et controle de Gestion",
          color: "#E040FB",
          id:8
        }
      ],
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
