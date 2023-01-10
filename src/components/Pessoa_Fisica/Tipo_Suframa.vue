<template>
        <h2 class="h2_suframa">Tipo <strong>SUFRAMA</strong>(Superintendência da<br>Zona Franca de Manaus)</h2>    
        <br>
        <select class="select" v-model="tipo_suframa">
            <option>ZFM(Zona Franca de Manaus)</option>
            <option>ALC(Área de Livre Comercio)</option>
            <option>Am. Ocid(Amazonia Ocidental)</option>
        </select>
        
        <br><label class="label_codigo_suframa">Codigo SUFRAMA:</label><input type="text" style="display: inline" class="input_suframa" v-model="codigo_suframa">
        
        <br><label class="label_num_inscricao">Numero de inscrição municipal: </label><input type="text" style="display: inline" class="input_inscricao" v-model="numero_inscricao_municipal">
</template>



<script>


export default{
   data(){
      return{
         tipo_suframa: []
      }
   },
    name: 'Tipo_Suframa',

    methods: {
      async Cadastrar(e) {

         e.preventDefault();

         const data = {
          tipo_suframa: Array.from(this.tipo_suframa)
        }

        const _token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2NzMzNDgxMjh9.XU5ue3YjmE3GtGeorNez8rS5Xl-PyYLRhBylSQXTJ3w'
        const dataJson = JSON.stringify(data);

        
        const req = await fetch('http://localhost:3000/burgers', {
          method: "POST",
          cache: 'no-cache',
          credentials: 'include',
          headers: {
            'Authorization': 'Bearer ' + _token, 
            "Content-Type" : "application/json" 
         },
          body: JSON.stringify(data)
        });

        const res = await req.json()
        console.log(res)
        this.msg = "Pedido realizado com sucesso!"
        // clear message
        setTimeout(() => this.msg = "", 9000)

        // limpar campos
        this.tipo_suframa = []
      
      }
   }
}
</script>