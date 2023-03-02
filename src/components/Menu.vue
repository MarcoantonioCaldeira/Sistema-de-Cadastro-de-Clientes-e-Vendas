<template> 
    <div>
        <div class="nav-menu">
            <i class="fas fa-bars" @click="Mostrar_Menu"> 
            </i> 
            <div class="nav-content" :class="this.MobileMenu ? 'abrir-menu' : 'fechar-menu'"> 

                <ul class="nav-items">
                    <router-link to="/"><li>Inicio</li></router-link>
                    <router-link to="./Selecao_Tipo_Pessoa"><li>Cadastro de Clientes</li></router-link>
                    <router-link to="./Cadastro_De_Vendas"><li>Cadastro de Vendas</li></router-link>
                    
                </ul>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script> 
export default{

  data(){
    return{
      MobileMenu: false,
    }
  },

  methods: {
    Mostrar_Menu() {
      this.MobileMenu = !this.MobileMenu;
    }
  }

}
</script>

<style src="../estilo_app.css"> 

</style>