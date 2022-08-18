<template>
  <div class="layout-main">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import '@/assets/scss/mobile/style.scss'

export default {
  name: 'Layout',
  components: {
    Header: () => import('./Header'),
    Footer: () => import('./Footer')
  }
}
</script>

<style>

</style>
