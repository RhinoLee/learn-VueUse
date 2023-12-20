import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/parallax',
      name: 'parallax',
      component: () => import('../views/ParallaxView.vue')
    }
  ]
})

export default router
