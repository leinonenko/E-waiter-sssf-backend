import { useAuthStore } from "./auth.store";

export const guestGuard = () => {
  const { isAuthenticated, isLoaded } = useAuthStore();
  if (!isLoaded) {
    return true;
  }
  if (isAuthenticated) {
    return { name: "admin-menu" };
  }
  return true;
};
export const authGuard = () => {
  const { isAuthenticated, isLoaded } = useAuthStore();
  if (!isLoaded) {
    return true;
  }
  if (!isAuthenticated) {
    return { name: "login" };
  }
  return true;
};
