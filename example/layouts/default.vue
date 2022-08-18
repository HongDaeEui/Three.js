<template>
  <div>
    <h1>{{ $t('locale.current') }}</h1>
    <component :is="app.layoutType"/>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  components: {
    DesktopDevice: () => import('@/layouts/desktop/Layout'),
    MobileDevice: () => import('@/layouts/mobile/Layout')
  },
  created() {
    if (process.browser) {
      this.handleWindowResize();
      window.addEventListener('resize', this.handleWindowResize);
    } else {
      this.changeLayoutType((this.$device.isDesktop) ? 'DesktopDevice' : 'MobileDevice')
    }
  },
  computed: {
    ...mapState(['app']),
  },
  methods: {
    ...mapActions({
      changeLayoutType: 'app/changeLayoutType'
    }),
    handleWindowResize() {
      if (typeof window === undefined) {
        return
      }

      this.changeLayoutType(((window.innerWidth < 1001) ? 'MobileDevice' : 'DesktopDevice'))
    },
  }
}
</script>

<style>

</style>
