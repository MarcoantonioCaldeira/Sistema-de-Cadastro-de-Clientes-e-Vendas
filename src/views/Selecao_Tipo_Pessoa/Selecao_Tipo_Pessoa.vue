<template>
    <etapas />
    <h1 class="titulo">Selecione o Tipo de Pessoa</h1>
    <div id="corpo">
        <Pessoa_Fisica />
        <Pessoa_Juridica />
        <Pessoa_Estrangeira />
    </div>
</template>

<script>

import Pessoa_Estrangeira from '@/components/Pessoa_Estrangeira/Pessoa_Estrangeira.vue';
import Pessoa_Fisica from '@/components/Pessoa_Fisica/Pessoa_Fisica.vue';
import Pessoa_Juridica from '@/components/Pessoa_Juridica/Pessoa_Juridica.vue';

export default{
 name: 'Selecao_Tipo_Pessoa',
 components:{
    Pessoa_Estrangeira,
    Pessoa_Fisica,
    Pessoa_Juridica,
 }
}  

</script>
<style src="./estilo_selecao.scss"  lang="scss"> 


</style>
