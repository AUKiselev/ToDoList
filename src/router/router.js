import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
// import { useUserStore } from "@/store/user";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: MainPage,
    // beforeEnter: async (to, from) => {
    //   const userStore = useUserStore();
    //   if (to.name !== "auth" && !userStore.accessToken && from) {
    //     return { name: "auth" };
    //   }
    // },
    children: [
      {
        path: "/todos",
        name: "todosPage",
        component: () => import("@/views/TodosView.vue"),
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("@/views/SettingsView.vue"),
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/pages/AuthorizationPage.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("@/pages/RegistrationPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
