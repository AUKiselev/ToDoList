import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import AuthorizationView from "@/pages/AuthorizationView.vue";
import RegistrationView from "@/pages/RegistrationView.vue";

// const isAuthenticated = false;

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: MainPage,
    // Тут нормальная проверка на авторизацию
    // beforeEnter: (to, from) => {
    //   if (to.name !== "auth" && !isAuthenticated && from) {
    //     return { name: "auth" };
    //   }
    // },
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthorizationView,
  },
  {
    path: "/registration",
    name: "registration",
    component: RegistrationView,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
