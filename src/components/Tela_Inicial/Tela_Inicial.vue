<template>
    <div id="Corpo_Tela_Inicial">
        <h1>Seja Bem-vindo</h1>
    </div>
    <Footer />
</template>

<script>
import Menu_Sistema from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default{
    name: 'Tela_Inicial',
    components:{
        Menu_Sistema,
        Footer
    }
}
</script>
<style src="./estilo_tela_inicio.scss" lang="scss"> 

</style>
