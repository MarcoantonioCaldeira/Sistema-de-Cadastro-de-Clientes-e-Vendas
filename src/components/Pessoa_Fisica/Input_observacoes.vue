<template> 
<p class="p_obs">Observações</p>
<textarea class="text_area" v-model="observacoes">

</textarea>
</template>

<script>


export default{

   name: 'Input_observacoes',

   data(){
      return{
         observacoes: ""
      }
   },
   methods: {

      async Cadastrar(e) {

         e.preventDefault();

         const data = {
          observacoes: this.observacoes
        }

        const _token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2NzM0Mzc5Mzl9.5sj6ZQnhz77VTmB4Y7wgk2PDrRAt7elOTs90BTEtE78'

        const dataJson = JSON.stringify(data);
            const req = await fetch('http://localhost:9000/clientes', {
                method: "POST",
                cache: 'no-cache',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + _token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const res = await req.json()
            console.log(res)
            this.msg = "Cadastro realizado com sucesso!"
            // clear message
            setTimeout(() => this.msg = "", 9000)

            // limpar campos
            this.observacoes = ""

      }

   }

}
</script>

<style>

</style>