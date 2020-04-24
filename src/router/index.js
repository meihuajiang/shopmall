import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () => import("../pages/Cart.vue")
  },
  {
    path: "/GoodDetail",
    name: "GoodDetail",
    component: () => import("../pages/GoodDetail.vue")
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../pages/Login.vue")
  },
  {
    path: "/Goods",
    name: "Goods",
    component: () => import("../pages/Goods.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
