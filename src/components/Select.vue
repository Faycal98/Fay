<template>
  <v-container class="flex justify-center items-center flex-col mt-6">
    <v-row class="mt-7 flex items-center no-gutter justify-center w-full">
      <v-col md="8" cols="12">
        <div class="card-container flex justify-center items-center">
          <v-card class="w-3/4 lg:p-7 card">
            <v-card-title class="pb-0">
              <h1 class="lg:text-3xl mb-6 text-2xl font-semibold font-sans">
                {{ $route.params.course }}
                <font-awesome-icon
                  class="text-2xl text-black"
                  to="/about"
                  icon="fa-solid fa-graduation-cap"
                />
              </h1>
            </v-card-title>
            <v-card-text class="text--primary">
              <div class="lg:text-xl font-sans mb-4">
                <p class="text-xl">Choisissez voitre niveau</p>
              </div>
            </v-card-text>
            <v-select
              v-model="select1"
              :items="items"
              label="Niveau"
              dense
              solo
            ></v-select>

            <v-card-actions class="flex justify-between">
              <v-btn color="green" text> Valider </v-btn>
              <router-link to="/epreuves">
                <v-btn color="orange" text> Retour </v-btn>
              </router-link>
            
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: ["Licence 1", "Licence 2", "Licence 3"],
      select1: "Licence 1",
    };
  },
};
</script>
<style scoped>
.title {
  font-size: 14px;
}
.card-container{
  min-width: 300px;
}

h1 {
  word-break: break-word;
}
@media only screen and (max-width: 600px) {
  .card {
    width: 350px;
    padding: 0 15px;
  }
}
</style>
