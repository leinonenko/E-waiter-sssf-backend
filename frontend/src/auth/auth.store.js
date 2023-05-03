import { defineStore } from "pinia";
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuthenticated: false,
    isLoaded: false,
    user: undefined,
  }),
  actions: {
    load() {
      this.isLoaded = true;
    },
    login(user) {
      this.isAuthenticated = true;
      this.user = { ...user };
    },
    logout() {
      this.isAuthenticated = false;
      this.user = undefined;
    },
  },
});
