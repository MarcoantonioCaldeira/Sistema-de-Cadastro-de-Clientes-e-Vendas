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
            foto: require('/src/assets/images/cronograma_3.png')
        }
    }
}

</script>
<style>
    @import "@/assets/scss/index.scss"; 
</style>

  