import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// Pages
import ProductsPage from "@/pages/ProductPage/index.vue";
// import SeparateProductPage from "@/pages/SeparateProductPage/index.vue";

const routes: Array<RouteRecordRaw> = [
  // Основная страница
  {
    path: "/",
    name: "ProductsPage",
    component: ProductsPage,
  },
  // Страница отдельного товара
  {
    path: "/product/:id",
    name: "SeparateProductPage",
    component: () => {
      return import("@/pages/SeparateProductPage/index.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
