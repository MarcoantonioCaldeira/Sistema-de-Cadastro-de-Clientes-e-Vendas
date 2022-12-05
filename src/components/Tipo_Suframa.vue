<template>
<h2 class="h2_suframa">Tipo <strong>SUFRAMA</strong>(Superintendência da<br>Zona Franca de Manaus)</h2>    
<br>
<select class="select">
    <option>ZFM(Zona Franca de Manaus)</option>
    <option>ALC(Área de Livre Comercio)</option>
    <option>Am. Ocid(Amazonia Ocidental)</option>
</select>

<br><label class="label_num_incricao">Codigo SUFRAMA:</label><input type="text" style="display: inline" class="input_suframa">

<br><label class="label_num_incricao">Numero de inscrição municipal: </label><input type="text" style="display: inline">
</template>



<script>
export default{
    name: 'Tipo_Suframa'
}
</script>