import Vue from 'vue'
import VueRouter from 'vue-router'
import Explorador from '@/components/vscode/Navegacoes/Explorador.vue'
import Extensoes from '@/components/vscode/Navegacoes/Extensoes.vue'
import ControleCodigoFonte from '@/components/vscode/Navegacoes/ControleCodigoFonte.vue'
import Tarefas from '@/components/vscode/Navegacoes/Tarefas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'explorador',
    component: Explorador
  },
  {
    path: '/extensoes',
    name: 'extensoes',
    component: Extensoes
  },
  {
    path: '/controleCodigoFonte',
    name: 'controleCodigoFonte',
    component: ControleCodigoFonte
  },
  {
    path: '/tarefas',
    name: 'tarefas',
    component: Tarefas
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
