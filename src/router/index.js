import { createRouter, createWebHashHistory } from 'vue-router'
import Selecao_Tipo_Pessoa from '../views/Selecao_Tipo_Pessoa/Selecao_Tipo_Pessoa'
//mport Cadastro_pt_1 from '../views/Cadastro_pt_1/Cadastro_pt_1'

const routes = [

  {
    path: '/',
    name: 'Selecao_Tipo_Pessoa',
    component: Selecao_Tipo_Pessoa

  },
  {
    path: '/Cadastro_pt_1_P_Fisica',
    name: 'Cadastro_pt_1_P_Fisica',
    component: () => import('../views/Cadastro_pt_1/Cadastro_pt_1_P_Fisica.vue')
  },
  {
    path: '/Cadastro_pt_1_P_Juridica',
    name: 'Cadastro_pt_1_P_Juridica',
    component: () => import('../views/Cadastro_pt_1/Cadastro_pt_1_P_Juridica.vue')
  },
  {
    path: '/Cadastro_pt_1_P_Estrangeira',
    name: 'Cadastro_pt_1_P_Estrangeira',
    component: () => import('../views/Cadastro_pt_1/Cadastro_pt_1_P_Estrangeira.vue')
  },
  {
    path: '/Cadastro_pt_2',
    name: 'Cadastro_pt_2',

    component: () => import('../views/Cadastro_pt_2/Cadastro_pt_2.vue')
  },
  {
    path: '/Cadastro_concluido',
    name: 'Cadastro_concluido',

    component: () => import('../views/Cadastro_concluido/Cadastro_concluido.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
