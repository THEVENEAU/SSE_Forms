import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: HomeView,
    meta: {
      icon: 'mdi-home'
    }
  },
  {
    path: '/about',
    name: 'À propos',
    component: AboutView,
    meta: {
      icon: 'mdi-information-variant'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
