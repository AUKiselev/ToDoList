import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import AuthorizationView from "@/pages/AuthorizationView.vue";
import RegistrationView from "@/pages/RegistrationView.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/auth",
    component: AuthorizationView,
  },
  {
    path: "/registration",
    component: RegistrationView,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
