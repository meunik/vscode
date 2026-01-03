import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import Vscode from '@/components/Vscode.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
    {
      path: '/:pathMatch(.*)*',
      name: 'vscode',
      component: Vscode,
    },
  ],
})

export default router
