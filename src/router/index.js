import Vue from "vue";
import VueRouter from "vue-router";
import Index from '../views/Index'
import About from '../views/About'
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
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/about",
    name: "About",
    component: About
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
