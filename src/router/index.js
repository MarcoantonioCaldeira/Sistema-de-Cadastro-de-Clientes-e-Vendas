import { createRouter, createWebHashHistory } from 'vue-router'
import Cadastro_pt_1 from '../views/Cadastro_pt_1/Cadastro_pt_1'

const routes = [
  {
    path: '/',
    name: 'Cadastro_pt_1',
    component: Cadastro_pt_1
  },
  {
    path: '/Cadastro_pt_2',
    name: 'Cadastro_pt_2',
   
    component: () => import(/* webpackChunkName: "Cadastro_pt_2" */ '../views/Cadastro_pt_2/Cadastro_pt_2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
