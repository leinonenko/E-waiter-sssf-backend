import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";

import { init } from "./app";
import navBar from "./components/navBar.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("navBar", navBar);
app.mount("#app");

init();
