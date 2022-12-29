<template> 
    <div id="etapas">
        <img v-bind:src="foto" id="img_etapas"/>
    </div>
</template>

<script>

export default{
    name: 'etapas',
    data(){
        return{
            foto: require('/src/assets/images/cronograma_1.png')
        }
    }
}

</script>
<style>
    @import "./estilo_selecao.scss"; 
</style>

  