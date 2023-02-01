<template>
  <v-container>
    <div class="accounts">
      <div class="accounts-choice-container">
        <div class="text-center">
          <h1 class="text-3xl mt-5 mb-8">Créer un compte client ou vendeur</h1>
          <v-row class="justify-center">
            <v-col cols="12" lg="6" md="5" offset-x-3>
              <div
                class="client-side"
                :class="{ active: current === 'client' }"
                @click="clickedClient"
              >
                <div class="input-container text-right">
                  <input type="radio" v-model="current" value="client" />
                </div>
                <font-awesome-icon
                  icon="fas fa-sack-dollar"
                  class="text-5xl mb-5 text-green-600"
                />
                <h2 class="text-2xl font-medium">Je suis un client</h2>
              </div>
            </v-col>

            <v-col cols="12" lg="6" md="5">
              <div
                class="seller-side"
                :class="{ active: current === 'seller' }"
                @click="clicked"
              >
                <div class="input-container text-right">
                  <input type="radio" v-model="current" value="seller" />
                </div>
                <font-awesome-icon
                  icon="fa-solid  fa-hand-holding-dollar"
                  class="text-5xl mb-5 text-red-700"
                />
                <h2 class="text-2xl font-medium">Je suis un vendeur</h2>
              </div>
            </v-col>
          </v-row>
          <button
            class="apply-btn"
            :disabled="true"
            @click="createAccount"
            v-if="current === null"
          >
            Créér un compte
          </button>
          <Button
            v-else
            :msg="getAccountType"
            type="submit"
            @clicked="createAccount"
          ></Button>

          <p>
            Déja un compte ?<router-link to="/login">
              <span class="text-color pl-2">Se connecter</span>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
import Button from "../components/ButtonChoice.vue";
export default {
  data() {
    return {
      current: null,
      activeClient: false,
      activeSeller: false,
    };
  },
  components: {
    Button,
  },
  methods: {
    clicked() {
      this.current = "seller";
    },
    clickedClient() {
      this.current = "client";
    },
    createAccount() {
      if (this.current === "client") {
        this.$router.push("/clientAccount");
      } else if (this.current === "seller") {
        this.$router.push("/sellerAccount");
      }
    },
  },
  computed: {
    getAccountType() {
      if (this.current === "seller") {
        return "S'inscrire en tant que vendeur";
      } else if (this.current === "client") {
        return "S'inscrire en tant que client";
      }
    },
  },
};
</script>
<style scoped>
.accounts {
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  flex-direction: column;
}

input {
  width: 18px;
  height: 18px;
}
.accounts-choice-container {
  margin-top: 60px;
  min-width: 680px;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #d5e0d5;
}

.client-side,
.seller-side {
  border: 1px solid #d5e0d5;
  border-radius: 10px;
  padding: 9px 10px 25px;
}

.client-side:hover,
.seller-side:hover {
  border: 1px solid rgb(2, 132, 199);
}

.text-color {
  color: rgb(2, 132, 199);
}

.client-side.active,
.seller-side.active {
  border: 2px solid rgb(2, 132, 199);
}
.apply-btn {
  background: #e4ebe4;
  color: #9aaa97;
  width: 300px !important;
  min-width: 300px !important;
  margin-top: 40px;
  line-height: 39px;
  max-height: 40px;
  border-radius: 10rem;
  margin-bottom: 30px;
}

@media only screen and (max-width: 800px) {
  .accounts-choice-container {
    min-width: auto;
    padding: 10px;
  }
}
</style>
