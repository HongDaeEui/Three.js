<template>
  <component :is="app.layoutType"/>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Index',
  components: {
    DesktopDevice: () => import('@/views/desktop/index'),
    MobileDevice: () => import('@/views/mobile/index'),
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['app']),
  },
  methods: {
    hello() {
      alert('hello')
    }
  },
  head() {
    return {
      title: 'Home'
    }
  },
};
</script>
