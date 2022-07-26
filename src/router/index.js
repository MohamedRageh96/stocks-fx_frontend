import { createRouter, createWebHistory } from "vue-router";
import StocksView from "../views/StocksView.vue";
import FxView from "../views/FxView.vue";

const routes = [
  {
    path: "/",
    name: "stocks",
    component: StocksView,
  },
  {
    path: "/fx",
    name: "fx",
    component: FxView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
