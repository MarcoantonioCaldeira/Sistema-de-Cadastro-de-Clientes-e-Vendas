import { createRouter, createWebHashHistory } from 'vue-router'
import Cadastro_pt_1 from '../views/Cadastro_pt_1'

const routes = [
  {
    path: '/',
    name: 'Cadastro_pt_1',
    component: Cadastro_pt_1
  },
  {
    path: '/Sobre',
    name: 'Sobre',
   
    component: () => import(/* webpackChunkName: "Sobre" */ '../views/Sobre.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
