<template>
    <h1>Selecione seu Tipo de pessoa</h1>
    <div id="corpo">
        <Pessoa_Fisica />
        <Pessoa_Juridica />
        <Pessoa_Estrangeira />
    </div>
    <Footer />
</template>

<script>

import Pessoa_Estrangeira from '@/components/Pessoa_Estrangeira.vue';
import Pessoa_Fisica from '@/components/Pessoa_Fisica.vue';
import Pessoa_Juridica from '@/components/Pessoa_Juridica.vue';
import Footer from '@/components/Footer.vue'

export default{
 name: 'Selecao_Tipo_Pessoa',
 components:{
    Pessoa_Estrangeira,
    Pessoa_Fisica,
    Pessoa_Juridica,
    Footer
 }
}  

</script>
<style> 

#corpo{
    width: 100%;
    height: 600px;
}

</style>
