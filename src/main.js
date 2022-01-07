import { createApp } from "vue";
import router from './router';

import App from "./App.vue";

const vueApp = createApp(App);
vueApp.use(router);
vueApp.mount("#app");
