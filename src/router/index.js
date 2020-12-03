import Vue from "vue";
import VueRouter from "vue-router";
import Index from '../views/Index'
import About from '../views/About'
import Contact from '../views/Contact'
import BathBody from '../views/BathBody'
import Fragrance from '../views/Fragrance'
import Makeup from '../views/Makeup'
import Skincare from '../views/Skincare'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/index",
    name: "Index",
    component: Index
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/bath-and-body",
    name: "BathBody",
    component: BathBody
  },
  {
    path: "/fragrance",
    name: "Fragrance",
    component: Fragrance
  },
  {
    path: "/makeup",
    name: "Makeup",
    component: Makeup
  },
  {
    path: "/skin-care",
    name: "Skincare",
    component: Skincare
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
