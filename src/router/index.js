import { createWebHistory, createRouter } from "vue-router";
import MainLayout from "../layouts/MainLayouts.vue";
import HomeMain from "../views/Main/HomeMain.vue";
import AboutUsMain from "../views/Main/AboutUsMain.vue";

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: HomeMain,
        name: 'HomeMain',
        meta: { title: 'Home' }
      },
      {
        path: '/about',
        component: AboutUsMain,
        name: 'AboutUsMain',
        meta: { title: 'About' }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
