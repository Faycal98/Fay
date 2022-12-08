<template>
  <v-form ref="form" v-model="valid">
    <v-container class="p-5">
      <v-card width="1000" class="mx-auto p-7 product-form">
        <h1
          class="text-2xl text-center uppercase mb-6 font-sans font-semibold form-title"
        >
          Formulaire d'enregistrement
        </h1>
        <p class="lg:text-xl lg:tracking-widest text-center">
          Enregistrer votre produit en remplissant le formulaire
        </p>
        <v-divider></v-divider>
        <h1 class="lg:text-2xl mt-4">Informations personnelles</h1>

        <v-row class="mt-3">
          <v-col cols="12" sm="6" lg="4">
            <v-text-field v-model="first" label="Nom" outlined></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" lg="4">
            <v-text-field v-model="last" label="Prénom" outlined></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" lg="4">
            <v-text-field v-model="last" label="Email" outlined></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" lg="4">
            <v-text-field
              v-model="last"
              label="Telephone"
              value="Grocery delivery"
              hint="For example, flowers or used cars"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <h1 class="lg:text-2xl capitalize">Information du produit</h1>
        <v-row class="mt-3">
          <v-col cols="12" sm="6" lg="4">
            <v-text-field
              v-model="first"
              label="Nom du produit"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" lg="4">
            <v-text-field
              v-model="phone"
              label="Prix du produit"
              outlined
              suffix="FCFA"
              type="number"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" lg="4">
            <v-text-field
              label="Nom du vendeur"
              value="Grocery delivery"
              hint="For example, flowers or used cars"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-file-input
              label="Photo du produit"
              outlined
              prepend-icon=""
              prepend-inner-icon="mdi-camera"
            ></v-file-input>
          </v-col>
        </v-row>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-card>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    first: "",
    last: "",
    phone: "",
    valid: true,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 840px) {
  .form-title {
    font-size: 15px;
  }

  .product-form p {
    font-size: 13px;
  }
  .product-form {
    padding: 1.2rem !important;
  }
}
</style>
