<template>
  <div class="home">
    <Inicio/>
    <Footer />
  </div>
</template>

<script>

import Inicio from '@/components/Pessoa_Fisica/inicio.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Inicio,
    Footer
  },
}
</script>
