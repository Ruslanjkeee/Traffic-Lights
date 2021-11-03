import { createRouter, createWebHistory } from "vue-router";
import Red from "../views/Red.vue";

const routes = [
  {
    path: "/",
    redirect: "/red",
  },
  {
    path: "/red",
    name: "Red",
    component: Red,
  },
  {
    path: "/yellow",
    name: "Yellow",
    component: () =>
      import("../views/Yellow.vue"),
  },
  {
    path: "/green",
    name: "Green",
    component: () =>
      import("../views/Green.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
