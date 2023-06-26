import { createRouter, createWebHashHistory } from 'vue-router'
import Tela_Inicial from '../components/Tela_Inicial/Tela_Inicial.vue'

const routes = [
  {
    path: '/',
    name: 'Tela_Inicial',
    component: Tela_Inicial
  },
  {
    path: '/Selecao_Tipo_Pessoa',
    name: 'Selecao_Tipo_Pessoa',
    component: () => import('../views/Selecao_Tipo_Pessoa/Selecao_Tipo_Pessoa.vue')

  },
  {
    path: '/Cadastro_pt_1_P_Fisica',
    name: 'Cadastro_pt_1_P_Fisica',
    component: () => import('../views/Cadastro_pt_1/Cadastro_pt_1_P_Fisica.vue')
  },

  {
    path:'/Cadastro_Teste',
    name:'Cadastro_Teste',
    component: () => import('../views/Cadastro_de_Vendas/Cadastro_Teste/Cadastro_Teste.vue')
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
    path: '/Cadastro_concluido',
    name: 'Cadastro_concluido',

    component: () => import('../views/Cadastro_concluido/Cadastro_concluido.vue')
  },
  {
    path: '/Cincronizacao',
    name: 'Cincronizacao_Vendas',

    component: () => import('../views/Cincronizacao/Cincronizacao')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
