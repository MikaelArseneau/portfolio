/* toutes les importation */
import HomeView from "../views/heroSection.vue";
import ProjectView from "../views/projetSection.vue";
import ProposView from "../views/ProposSection.vue";
import contact from "../views/contact.vue";

import { createRouter, createWebHashHistory } from "vue-router";

/* toutes les chemins vers les pages du site */
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projets",
    name: "projets",
    component: ProjectView,
  },
  {
    path: "/propos",
    name: "propos",
    component: ProposView,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
