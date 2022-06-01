import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import AuthorizationView from "@/pages/AuthorizationView.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/auth",
    component: AuthorizationView,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
