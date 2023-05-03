import { sessionStore } from "./auth/session";
import { useAuthStore } from "./auth/auth.store";

export const init = () => {
  sessionStore.init();
  const auth = useAuthStore();
  if (sessionStore.state.user) auth.login(sessionStore.state.user);

  auth.load();
};
