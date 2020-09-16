import Vue from "vue";
import VueRouter from "vue-router";
// import Code from "../pages/code.vue";
import Home from "../components/home.vue"
// import Interest from "../pages/interest.vue";
// import Lesson from "../pages/lesson";
import Describe from "../pages/describe.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "home",
    component: Home
  },
//   {
//     path: "/code",
//     component: Code
//   },
//   {
//     path: '/interest',
//     component: Interest
//   },
//   {
//     path: '/lesson',
//     component: Lesson
//   },
  {
    path: '/describe',
    component: Describe
  }
];

const router = new VueRouter({
  mode: "history",   //hash
  base: '/',
  routes
});

export default router;
