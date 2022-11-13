import Vue from "vue";
import VueRouter from "vue-router";
import redirect2 from "../middlewares/redirect2";
import redirectEp from "../middlewares/redirectEpreuves";
import indexRoute from "../middlewares/index";

/* import auth from "../middlewares/auth";
import redirect from "../middlewares/redirect"; */
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      guestGuard: true,
    },
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    meta: {
      guestGuard: true,
    },
    component: () => import("../views/Shop.vue"),
  },
  {
    path: "/epreuves",
    name: "epreuves",
    meta: { requiresAuth: true },
    component: () => import("../views/Epreuve.vue"),
  },
  {
    path: "/epreuve/:course/:id",
    name: "courseList",
    component: () => import("../components/Select.vue"),
    beforeEnter: redirectEp,
  },
  {
    path: "/shop/:product/:id",
    name: "productDetail",
    component: () => import("../views/ProductInfo.vue"),
  },
  {
    path: "/panier",
    name: "MyCart",
    meta: { requiresAuth: true },
    component: () => import("../views/MyCart.vue"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("../views/Login.vue"),
    beforeEnter: redirect2,
    /* (to,from,next)=>{
redirect2(to,from,next)
    } */
  },

  {
    name: "login2",
    path: "/login2",
    component: () => import("../views/Login2.vue"),
  },
  {
    name: "create",
    path: "/createAccount",
    component: () => import("../views/CreateAccount.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach(indexRoute);

/* function auth(to, from, next) {
  if (store.state.isAuth) {
    next();
    return true;
  } else {
    next("/login");
    return;
  }
}
function index(to, from, next){
  if (to.meta.requiresAuth) {
    auth(to, from, next);
  }else{
    redirect()
  } 
}
 */
export default router;
