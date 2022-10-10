import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import"../src/css/style.css"
import vuetify from './plugins/vuetify'
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
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
        id: 3,
      },
      {
        name: "Action Commerciale et Force de Vente",
        color: "#00BCD4",
        id: 4,
      },
      {
        name: "Electronique",
        color: "#673AB7",
        id: 5,
      },
      {
        name: "Commerce International",
        color: "#3F51B5",
        id: 6,
      },
      {
        name: " Informatique de Gestion",
        color: "#2196F3",
        id: 7,
      },
      {
        name: "Audit et controle de Gestion",
        color: "#E040FB",
        id: 8,
      },

      {
        name: "Transport et Logistique",
        color: "#FFEE58",
        id: 9,
      },

      {
        name: " Assurances",
        color: "#FFAB91",
        id: 10,
      },
    ],
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  router,
  vuetify,
  store,
  el: '#app',
  components: { App },
  render: h => h(App)
}).$mount('#app')
