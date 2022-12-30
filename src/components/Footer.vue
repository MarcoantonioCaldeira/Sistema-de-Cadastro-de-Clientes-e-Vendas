<template>

    <div id="footer">
         <h4>© TI-Gestor Software LTDA 2023</h4>
    </div>
    
</template>
<script>
export default{
    name: 'Footer'
}
</script>
<style>
@import "@/assets/scss/index.scss"; 

*{
    margin: 0; 
    padding: 0;
}

h4{
    position: absolute;
    margin-top: 8%;
    color: white;
    margin-left: 43%;
    font-family: 'Poppins';
}

#footer{
    width: 100%;
    height: 200px;
    background-color: #003A4C;
}

</style>