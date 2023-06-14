<template>
    <div class="message-container">
        {{ msg }}
    </div>
</template>

<script>

export default{
    name: 'Message', 
    props:{
        msg: String
    }
}

</script>

<style>

.message-container{
    position: fixed;
    z-index: 150;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #004085;
    transition: opacity 0.5s ease;
    background-color: #deeeff;
    border: 2px solid #deeeff;
    border-radius: 5px;
    padding: 20px;
    max-width: 400px;
    margin: 40px auto;
    margin-top: -100px;
    margin-left: 40%; 
}


</style>