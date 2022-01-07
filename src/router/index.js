import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/Index.vue";
import Contacts from "../views/Contacts.vue";
import Projects from "../views/Projects.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

/*
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: () =>
  import(/* webpackChunkName: "about"  "../views/About.vue"),
},
*/
