import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ListingPage from '../pages/ListingPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },

    { path: '/listings/:id', name: 'listing', component: ListingPage },
  ],
})