import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/lesson",
    component: () => import("../views/home.vue"),
    children: [
      {
        path: "lesson",
        name: "lesson",
        component: () => import("../views/lesson.vue"),
      },
      {
        path: "mail",
        name: "mail",
        component: () => import("../views/mail.vue"),
      },
      {
        path: "set",
        name: "set",
        component: () => import("../views/set.vue"),
      },
    ]
  },
  {
    path: "/describe",
    name: "describe",
    component: () => import("../views/describe.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
