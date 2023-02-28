<template> 
   
    <div id="Menu_Sistema" class="meu_menu">
        <i class="fas fa-bars"   @click="Mostrar_Menu"></i> 

        <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"> 
            <router-link to="/"><li>Inicio</li></router-link>
            <router-link to="./Selecao_Tipo_Pessoa"><li>Cadastro de Clientes</li></router-link>
            <router-link to="./Cadastro_De_Vendas"><li>Cadastro de Vendas</li></router-link>
        </div>
    </div>
   
    <router-view/>
</template>

<script> 
export default{
    name: 'Menu_Sistema',

    data(){
        return{
            showMobileMenu: false
        }
    },
    methods: {
        Mostrar_Menu(){
            this.showMobileMenu = !this.showMobileMenu;
        }
    }
}


</script>

<style src="../estilo_app.css"> 

</style>