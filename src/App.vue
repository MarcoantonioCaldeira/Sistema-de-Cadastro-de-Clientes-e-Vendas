<template>
  <nav>
    <!--<router-link to="/">Pagina Incial</router-link>-->
  </nav>
  <router-view/>
</template>

<style>
nav{
  width:100%;
  height: 100px;
  background-color: #003A4C;
}

@media screen and (max-width: 300px) {
    
  nav{
    height: 80px;
  }
}
</style>
