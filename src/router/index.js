import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
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
  },
  {
    name: "create",
    path: "/createAccount",
    component: () => import("../views/CreateAccount.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(to.meta.requiresAuth);
  if (to.meta.requiresAuth) {
    if (store.state.isAuth) {
      next();
      return true;
    } else {
      next("/login");
      return;
    }
  }
  //  return true
  next();
});
export default router;
