import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/parallax',
      name: 'parallax',
      component: () => import('../views/ParallaxView.vue')
    },
    {
      path: '/globalState',
      name: 'globalState',
      component: () => import('../views/GlobalStateView.vue')
    },
    {
      path: '/asyncState',
      name: 'asyncState',
      component: () => import('../views/AsyncStateView.vue')
    }
  ]
})

export default router
