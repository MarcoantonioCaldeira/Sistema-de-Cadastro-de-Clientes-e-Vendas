import { createRouter, createWebHashHistory } from 'vue-router'
import Tela_Inicial from '../components/Tela_Inicial/Tela_Inicial.vue'

const routes = [
  {
    path: '/',
    name: 'Tela_Inicial',
    component: Tela_Inicial
  },

  {
    path: '/Itens_da_Venda',
    name: 'Itens_da_Venda',
    component: () => import('../views/Cadastro_de_Vendas/Itens_da_Venda/Itens_da_Venda.vue')

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
    path: '/Informacoes_Venda',
    name: 'Informacoes_Venda',
    component: () => import('../views/Cadastro_de_Vendas/Informacoes_Venda.vue')
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
