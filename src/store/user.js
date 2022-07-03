import { registrationUser, getJwtToken, getUserData } from "@/api/auth";
import { defineStore } from "pinia";

export const useUserStore = defineStore("auth", {
  state: () => ({
    accessToken: "",
    refreshToken: "",
    username: "",
    userID: "",
  }),

  getters: {
    async getUsername() {
      if (this.accessToken) {
        const { username } = await getUserData(this.accessToken);
        this.username = username;
      }
    },

    async getUserID() {
      if (this.accessToken) {
        const { id } = await getUserData(this.accessToken);
        this.userID = id;
      }
    },
  },

  actions: {
    async registration(email, username, password) {
      await registrationUser(email, username, password);
      return { username, password };
    },

    async getToken(username, password) {
      const { access, refresh } = await getJwtToken(username, password);

      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      this.accessToken = access;
      this.refreshToken = refresh;

      return this.accessToken;
    },
  },
});
