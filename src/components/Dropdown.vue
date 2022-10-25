<template>
  <label class="dropdown">
    <div class="dd-button" :class="{ 'ml-1': connected }">
      <v-avatar v-if="$store.state.isAuth">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>

      <font-awesome-icon
        v-else
        class="w-full text-white"
        icon="fa-solid fa-user"
      />
    </div>

    <input type="checkbox" class="dd-input" id="test" />

    <ul class="dd-menu md:text-xl xs:text-xs">
      <li v-if="!$store.state.isAuth" @click="login">
        Se connecter
        <font-awesome-icon class="text-black ml-3" icon="fa-solid fa-sign-in" />
      </li>
      <li v-if="$store.state.isAuth">
        Voir le profile
        <font-awesome-icon class="text-black ml-3" icon="fa-solid fa-user" />
      </li>
      <li>Mes favoris</li>
      <li class="divider"></li>
      <li v-if="$store.state.isAuth" @click="logout">
        Se Deconnecter
        <font-awesome-icon
          class="text-black ml-3"
          icon="fa-solid fa-power-off"
        />
      </li>
    </ul>
  </label>
</template>
<script>
export default {
  data() {
    return {
      connected: true,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },

    login() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000000;
}

a:hover {
  color: #222222;
}

/* Dropdown */

.dropdown {
  display: inline-block;
}

.dd-button {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  white-space: nowrap;
}

.dd-input {
  display: none;
}

.dd-menu {
  position: absolute;
  top: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  right: 0;
  padding: 0;
  color: black;
  margin: 2px 0 0 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  list-style-type: none;
}

.dd-input + .dd-menu {
  display: none;
}

.dd-input:checked + .dd-menu {
  display: block;
}

.dd-menu li {
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;
}

.dd-menu li:hover {
  background-color: #f6f6f6;
}

.dd-menu li a {
  display: block;
  margin: -10px -20px;
  padding: 10px 20px;
}

.dd-menu li.divider {
  padding: 0;
  border-bottom: 1px solid #cccccc;
}
</style>
