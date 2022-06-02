import Vue from "vue";
import VueRouter from "vue-router";
import TestPage from "../views/TestPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/testpage",
    name: "TestPage",
    component: TestPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
