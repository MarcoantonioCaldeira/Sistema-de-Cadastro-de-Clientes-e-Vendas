<template>
    <div id="corpo">
        <h1 class="h1_cadastro_concluido">Cadastro concluido com sucesso</h1>
        <router-link to="/"><button class="btn_voltar_ao_inicio">Voltar ao inicio</button></router-link>
    </div>
    <Footer />
</template>
<script>

import Footer from '@/components/Footer.vue'

export default{
    name: 'Cadastro_concluido',
    components:{
        Footer
    }
}
</script>
<style src="./estilo.scss"  lang="scss">

</style>