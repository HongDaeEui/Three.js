<template>
  <footer class="footer">
    © {{ year }} EnterBlock. All Rights Reserved. Desktop
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  },
  computed: {
    year() {
      return (new Date()).getFullYear();
    }
  }
}
</script>
