import { createRouter, createWebHistory } from "vue-router";
import { authGuard, guestGuard } from "./auth/auth.guard";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "menu",
      component: () => import("./pages/MenuPage.vue"),
      beforeEnter: [guestGuard],
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("./pages/MenuPage.vue"),
      beforeEnter: [authGuard],
      children: [
        {
          path: "/menu",
          name: "admin-menu",
          component: () => import("./pages/LoginPage.vue"),
          beforeEnter: [authGuard],
        },
      ],
    },

    {
      path: "/login",
      name: "login",
      component: () => import("./pages/LoginPage.vue"),
      beforeEnter: [guestGuard],
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./pages/RegisterPage.vue"),
      beforeEnter: [guestGuard],
    },
    {
      path: "/items/id",
      name: "itemsById",
      component: () => import("./pages/ItemPage.vue"),
      beforeEnter: [guestGuard],
    },
    {
      path: "/orders",
      name: "orders",
      component: () => import("./pages/OrderPage.vue"),
      beforeEnter: [guestGuard],
    },
  ],
});

export default router;
