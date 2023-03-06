<template> 
    <div class="App">
       <Menu />
    </div>
    <router-view />
</template>

<script> 

import Menu from './components/Menu.vue'

export default{
  name: 'App',
  components:{
    Menu
  }
};
</script>

<style> 

</style>
