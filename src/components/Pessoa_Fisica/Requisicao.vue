<script>
    //import Insformacoes_Cliente from './Informacoes_Cliente.vue'
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

        const _token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2NzMwMTE1Njd9.Rc7HW296PzrSSIfqQNJoI8GJTI6HCrAQBmyANpkOzss'
        const dataJson = JSON.stringify(data);

        const req = await fetch('http://localhost:3000/burgers', {
          method: "POST",
          headers: {
            'Authorization': 'Bearer ' + _token, 
            "Content-Type" : "application/json" },
          body: dataJson
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
