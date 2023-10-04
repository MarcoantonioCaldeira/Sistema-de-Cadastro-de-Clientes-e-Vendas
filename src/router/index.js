import { createRouter, createWebHashHistory } from 'vue-router'
//import Tela_Inicial from '../components/Tela_Inicial/Tela_Inicial.vue'
import Login from '../components/Login/Login.vue'
import store from '../components/services/store';

const routes = [
  {
    path: '',
    name: 'Login',
    component: Login,
    meta: {
      public: true,
    }
  },

  {
    path: '/Tela_Inicial',
    name: 'Tela_Inicial',
    component:  () => import('../components/Tela_Inicial/Tela_Inicial.vue'),
    beforeEnter: (to, from, next) => {
      if(router.app.$store.state.isAuthenticated){
        next();
      } else {
        next('/');
      }
    }
  },

  {
    path: '/Selecao_Tipo_Pessoa',
    name: 'Selecao_Tipo_Pessoa',
    component: () => import('../views/Selecao_Tipo_Pessoa/Selecao_Tipo_Pessoa.vue'),
    beforeEnter: (to, from, next) => {
      if(router.app.$store.state.isAuthenticated){
        next();
      } else {
        next('/');
      }
    }
  },

  {
    path: '/Cadastro_pt_1_P_Fisica',
    name: 'Cadastro_pt_1_P_Fisica',
    component: () => import('../views/Cadastro_pt_1/Cadastro_pt_1_P_Fisica.vue'),
    beforeEnter: (to, from, next) => {
      if(router.app.$store.state.isAuthenticated){
        next();
      } else {
        next('/');
      }
    }
  },

  {
    path:'/Cadastro_de_Vendas',
    name:'Cadastro_de_Vendas',
    component: () => import('../views/Cadastro_de_Vendas/Formulario_Cadastro_Vendas/Cadastro_de_Vendas.vue'),
    beforeEnter: (to, from, next) => {
      if(router.app.$store.state.isAuthenticated){
        next();
      } else {
        next('/');
      }
    }
  },

  {
    path: '/Cadastro_pt_1_P_Juridica',
    name: 'Cadastro_pt_1_P_Juridica',
    component: () => import('../views/Cadastro_pt_1/Cadastro_pt_1_P_Juridica.vue'),
    beforeEnter: (to, from, next) => {
      if(router.app.$store.state.isAuthenticated){
        next();
      } else {
        next('/');
      }
    }
  },

  {
    path: '/Cadastro_pt_1_P_Estrangeira',
    name: 'Cadastro_pt_1_P_Estrangeira',
    component: () => import('../views/Cadastro_pt_1/Cadastro_pt_1_P_Estrangeira.vue'),
    beforeEnter: (to, from, next) => {
      if(router.app.$store.state.isAuthenticated){
        next(); 
      } else {
        next('/');
      }
    }
  },

  {
    path: '/Cadastro_concluido',
    name: 'Cadastro_concluido',
    component: () => import('../views/Cadastro_concluido/Cadastro_concluido.vue'),
    beforeEnter: (to, from, next) => {
      if(router.app.$store.state.isAuthenticated){
        next();
      } else {
        next('/');
      }
    }
  },

  {
    path: '/Cincronizacao',
    name: 'Cincronizacao_Vendas',
    component: () => import('../views/Cincronizacao/Cincronizacao'),
    beforeEnter: (to, from, next) => {
      if(router.app.$store.state.isAuthenticated){
        next();
      } else {
        next('/');
      }
    }
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
