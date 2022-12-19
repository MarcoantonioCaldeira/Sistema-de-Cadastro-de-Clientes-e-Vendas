<template>
  <div class="home">
    <Inicio/>
    <Footer />
  </div>
</template>

<script>

import Inicio from '@/components/Inicio/inicio.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Inicio,
    Footer
  }
}
</script>
