import { registrationUser, getJwtToken } from "@/api/auth";
import { defineStore } from "pinia";

export const useUserStore = defineStore("auth", {
  state: () => ({
    accessToken: "",
    refreshToken: "",
  }),

  actions: {
    async registration(email, username, password) {
      await registrationUser(email, username, password);
      return { username, password };
    },

    async getToken(username, password) {
      const { access, refresh } = await getJwtToken(username, password);
      this.accessToken = access;
      this.refreshToken = refresh;
      return this.accessToken;
    },
  },
});
