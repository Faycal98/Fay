<template>
  <v-container class="h-sreen">
    <v-row justify="center" class="h-screen">
      <v-col cols="12" md="12" class="row-content h-screen">
        <v-card class="px-11 mb-4 mx-auto card" width="480">
          <v-card-title
            class="flex justify-center text-2xl mt-6 mb-5 font-bold text-light-blue leading-9 capitalize card-title"
          >
            Mon compte
          </v-card-title>
          <v-card-text>
            <form>
              <div class="formField">
                <label for="name">
                  <font-awesome-icon
                    icon="fa-solid fa-user"
                    class="text-gray-500 mr-2"
                  />Nom:</label
                >
                <input v-model="name" type="text" id="name" name="name" />
              </div>
              <div class="formField">
                <label for="lname">
                  <font-awesome-icon
                    icon="fa-solid fa-key"
                    class="text-gray-500 mr-1"
                  />
                  Mot de passe:</label
                >
                <input
                  v-model="password"
                  type="password"
                  id="lname"
                  name="lname"
                />
              </div>
              <div class="item tw-flex tw-justify-between tw-items-center">
                <div class="checkbox-rect tw-my-6 tw-text-light-blue">
                  <input type="checkbox" id="checkbox-rect1" name="check" />
                  <label for="checkbox-rect1">Se rappeler de moi</label>
                </div>
                <p class="text-light-green mt-2">Mot de passe oublié?</p>
              </div>
              <SubmitButton msg="Se connecter" @clicked="login"></SubmitButton>
            </form>
          </v-card-text>
        </v-card>
        <p class="text-center tw-text-base">
          Pas de compte?
          <router-link to="/createAccount">
            <span class="text-light-green font-semibold">Créer un compte</span>
          </router-link>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SubmitButton from "@/components/SubmitButton.vue";
export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  components: {
    SubmitButton,
  },
  methods: {
    login() {
      this.$store.dispatch("login");
      this.$router.push("/");
      console.log(10000);
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

.item p {
  margin: 0;
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

.row-content {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.formField label {
  font-size: 18px;
  display: block;
  margin-bottom: 5px;
  line-height: 22px;
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
  .row-content {
    margin-top: 0px !important;
    justify-content: center;
    height: 100vh !important;
    align-items: center;
  }
  .card {
    padding: 0 20px !important;
    width: 370px !important;
  }

  .row-content {
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .card-title {
    margin-top: 0px !important;
    margin-bottom: 10px !important;
  }

  .formField {
    margin-bottom: 5px !important;
    margin-bottom: 7px !important;
  }

  .formField input {
    padding: 8px !important;
  }

  .formField label {
    font-size: 16px;
  }
}
</style>
