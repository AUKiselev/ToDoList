import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import AuthorizationView from "@/pages/AuthorizationView.vue";
import RegistrationView from "@/pages/RegistrationView.vue";
// import { useUserStore } from "@/store/user";

// const isAuthenticated = false;

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: MainPage,
    // beforeEnter: (to, from) => {
    //   const userStore = useUserStore();
    //   if (to.name !== "auth" && !userStore.accessToken && from) {
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
