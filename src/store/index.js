import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0,
      isAuth:localStorage.getItem('isAuth')=='true',
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
      products: [
        {
          name: "Samsung S21",
          img: "S21.jpg",
          price: 400000,
          id:0
        },
        {
          name: "Samsung S21",
          img: "1200x-1.jpg",
          price: 300000, 
          id:1
        },
        {
          name: "nike.jpg",
          img: "nike.jpg",
          price: 30000, 
          id:2
        },
      
        {
          name:'ducati',
          img:"Streetfighter.jpg",
          price:3000000,
          id:4
  
        },
        {
          name:'PS5',
          img: 'ps5.jpg',
          price:500000,
          id:5
        },
        {
          name:'Iphone 13',
          img:'p10.jpg',
          price:400000,
          id:6
        },
        {
          name:'SAO',
          img:'sao.jpeg',
          price:4000,
          id:7
        },
        {
          name:'Mirai nikki',
          img:'mirai.jpeg',
          price:2300,
          id:8
        },
        
      ],
    },
    mutations: {
      increment (state) {
        state.count++
      },
      UPDATE_AUTH(state,payload){
        state.isAuth = payload;
        localStorage.setItem('isAuth',payload)
      }
    },
    actions:{
      login({commit}){
        commit('UPDATE_AUTH', true)
      },
      logout({commit}){
        commit('UPDATE_AUTH', false)
      },
    }
  })

 export default store 