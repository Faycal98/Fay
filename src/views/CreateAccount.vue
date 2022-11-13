<template>
  <v-container class="flex">
    <v-row justify="center">
      <v-col cols="12" class="form-container mt-4">
        <v-card class="px-7 mb-2 mx-auto card" max-width="480">
          <v-card-title
            class="flex justify-center text-2xl capitalize text-light-blue font-bold leading-9 card-title"
          >
            Créer un compte
          </v-card-title>
          <v-card-text>
            <form>
              <div class="formField">
                <label for="name">Nom:</label>
                <input v-model="name" type="text" id="name" name="name" />
              </div>
              <div class="formField">
                <label for="firstName">Prénom:</label>
                <input
                  v-model="firstName"
                  type="text"
                  id="firstName"
                  name="fistName"
                />
              </div>
              <div class="formField">
                <label for="password">Mot de passe:</label>
                <input
                  v-model="password"
                  type="password"
                  id="lname"
                  name="lname"
                />
              </div>

              <div class="item">
                <div class="checkbox-rect tw-my-6">
                  <input type="checkbox" id="checkbox-rect1" name="check" />
                  <label for="checkbox-rect1"
                    >I agree to Kaoshi's Terms of Use and consent to Kaoshi's
                    Private Statement</label
                  >
                </div>
              </div>

              <SubmitButton @clicked="submit" msg="Valider"></SubmitButton>
            </form>
          </v-card-text>
        </v-card>
        <p class="text-center text-base">
          Déja un compte?
          <router-link to="/login">
            <span class="text-light-green font-semibold">Se connecter</span>
          </router-link>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SubmitButton from "../components/SubmitButton.vue";
export default {
  data() {
    return {
      name: "",
      firstName: "",
      password: "",
    };
  },
  components: {
    SubmitButton,
  },
  methods: {
    submit() {
      this.submit;
    },
  },
};
</script>
<style scoped>
.checkbox-rect input[type="checkbox"] {
  display: none;
}

.checkbox-rect input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  padding-right: 10px;
  margin-bottom: 20px;
  font: 14px/20px "Open Sans", Arial, sans-serif;
  cursor: pointer;
}
.v-sheet.v-card {
  border-radius: 11px;
}
.checkbox-rect input[type="checkbox"] + label:last-child {
  margin-bottom: 0;
}
.checkbox-rect input[type="checkbox"] + label:before {
  content: "";
  display: block;
  width: 1.4em;
  height: 1.4em;
  border: 1px solid #e1e1ee;
  border-radius: 0.2em;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transition: all 0.2s, background 0.2s ease-in-out;
  transition: all 0.2s, background 0.2s ease-in-out;
  background: #f3f3f3;
}
.checkbox-rect input[type="checkbox"]:checked + label:before {
  width: 1.4em;
  height: 1.4em;
  border-radius: 0.2em;
  border: 3px solid #fff;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  background: #15abab;
  box-shadow: 0 0 0 1px #e1e1ee;
}

.checkbox-rect label {
  color: #1a244e;

  opacity: 0.6;
}
.logo-title {
  font-family: "Roboto";
  color: #000000;
}
input[type="submit"] {
  color: #fff;
  font-weight: 800;
  font-size: 16px;
}
.formField {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.formField input {
  border: solid 1px #e1e1ee;
  border-radius: 4px;
  padding: 13px;
  color: #1a244e;
  margin-bottom: 5px;
  font-size: 14px;
  display: block;
  width: 100%;
}

.formField input:focus {
  outline: none;
}

.card-title {
  font-size: 1.5rem;
}
.formField label {
  font-size: 18px;
  display: block;
  margin-bottom: 5px;
  line-height: 22px;
}

.form-container {
    padding: 10px 16px;
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }



input[type="checkbox"] {
  /* ...existing styles */
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

@media only screen and (max-width: 600px) {
  .form-container {
    padding: 10px 16px;
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }


  .validate {
    margin-bottom: 10px !important;
    padding: 10px 0px !important;
  }
  .formField input {
    padding: 6px;
  }

  .v-card__title {
    padding: 11px !important;
    margin-top: 12px !important;
  }
  .formField {
    margin-bottom: 8px !important;
  }
  .formField label{
    font-size: 16px;
  }
  .card {
    padding: 0 20px !important;
    margin-bottom: 9px !important;

  }
  .card-title {
    margin-bottom: 0px !important;
    font-size: 1.4rem;
  }
}
</style>
