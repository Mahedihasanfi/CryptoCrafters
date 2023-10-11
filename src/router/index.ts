import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PriceView from '../views/PriceView.vue'
import NewsView from '../views/NewsView.vue'
import ResourcesView from '../views/ResourcesView.vue'
import CommunityView from '../views/CommunityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/price',
      name: 'price',
      component: PriceView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityView
    }
  ]
})

export default router
