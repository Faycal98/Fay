<template>
  <v-container class="flex justify-center">
    <v-row class="mt-7 flex items-center justify-center">
      <v-col sm="8" md="8">
        <div class="card-container flex justify-center">
          <v-card class="w-3/4 lg:p-7 card">
            <v-card-title class="pb-0">
              <h1 class="lg:text-3xl text-2xl">{{ $route.params.course }}</h1>
            </v-card-title>

            <v-card-text class="text--primary">
              <div class="lg:text-xl text-xl">Choisissez voitre niveau</div>
            </v-card-text>
            <v-select
              v-model="select"
              :items="items"
              label="Niveau"
              dense
              solo
            ></v-select>

            <v-card-actions>
              <v-btn color="orange" text> Valider </v-btn>
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
      items: ["Licence 1", "License 2", "License 3"],
      select: "licence 1",
    };
  },
};
</script>
<style scoped>
.title {
  font-size: 14px;
}

@media only screen and (max-width: 600px) {
.card{
width: 350px;
padding: 0 15px;
}
}
</style>
