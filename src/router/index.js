import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/SignIn.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue'),
    },
  ],
})

export default router
