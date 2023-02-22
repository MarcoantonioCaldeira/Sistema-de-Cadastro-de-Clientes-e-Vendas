<template>
  <nav>
    <div id="Menu_Sistema">
      <router-link to="/"><li>Inicio</li></router-link>
      <router-link to="./Selecao_Tipo_Pessoa"><li>Cadastro de Clientes</li></router-link>
      <router-link to="./Cadastro_De_Vendas"><li>Cadastro de Vendas</li></router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>



export default{
  name: 'App',
  components:{
    
  }
}
</script>

<style src="./estilo_app.css">

</style>
