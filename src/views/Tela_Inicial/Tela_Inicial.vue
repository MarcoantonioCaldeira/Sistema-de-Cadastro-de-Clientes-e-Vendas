<template>
    <Menu_Sistema />
    <div>
        <h2>Aqui é a tela inicial do Sistema</h2>
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
