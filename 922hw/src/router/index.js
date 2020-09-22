import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "aside",
    redirect: "/user",
    component: () => import("../views/aside.vue"),
    children: [
      {
        path: "user",
        name: "user",
        component: () =>import("../views/user.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () =>import("../views/login.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
