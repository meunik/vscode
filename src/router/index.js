import { createRouter, createWebHistory } from 'vue-router'
import Vscode from '@/components/Vscode.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Vscode,
    },
  ],
})

export default router
