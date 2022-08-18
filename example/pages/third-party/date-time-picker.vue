<template>
  <component :is="app.layoutType"/>
</template>

<script>
import {mapState} from "vuex";
import 'flatpickr/dist/flatpickr.css';

export default {
  name: 'DateTimePicker',
  components: {
    DesktopDevice: () => import('@/views/desktop/third-party/date-time-picker'),
    MobileDevice: () => import('@/views/mobile/third-party/date-time-picker'),
    flatPickr: () => import('vue-flatpickr-component')
  },
  data() {
    return {
      dateDefault: null,
      timePicker: null,
      dateNtim: null,
      rangeDate: null,
    }
  },
  computed: {
    ...mapState(['app']),
  },
  methods: {
  },
  head() {
    return {
      title: 'DateTimePicker'
    }
  },
};
</script>
