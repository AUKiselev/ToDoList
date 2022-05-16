import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import AuthorizationViev from "@/pages/AuthorizationViev.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/auth",
    component: AuthorizationViev,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
