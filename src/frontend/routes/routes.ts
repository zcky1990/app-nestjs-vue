import { createRouter, createWebHistory } from 'vue-router';

import IndexPage from './../pages/Index.vue';
import AboutPage from './../pages/About.vue';

const routes = [
  { 
    path: '/', 
    component: IndexPage 
  },
  { 
    path: '/about', 
    component: AboutPage 
  },
];

const Router = createRouter({
  history: createWebHistory(),  // Changed from createMemoryHistory to createWebHistory
  routes,
});

export default Router;
