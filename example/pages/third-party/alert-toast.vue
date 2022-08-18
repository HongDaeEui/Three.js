<template>
  <component :is="app.layoutType"/>
</template>

<script>
import {mapState} from "vuex";
import Swal from 'sweetalert2'

export default {
  name: 'AlertToast',
  components: {
    DesktopDevice: () => import('@/views/desktop/third-party/alert-toast'),
    MobileDevice: () => import('@/views/mobile/third-party/alert-toast'),
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['app']),
  },
  methods: {
    toast() {
      this.$toast("Toast Message");
    },
    sweetAlert() {
      Swal.fire({
        title: 'Sweet<br/>Alert',
        html: "Alert<br/>Message",
        icon: 'info',
        confirmButtonText: 'Confirm'
      })
    },
  },
  head() {
    return {
      title: 'AlertToast'
    }
  },
};
</script>

<style lang="scss" scoped>
.layout-main {
  .content {
    text-align: center;
    font-weight: bold;
    padding-top: 50px;

    .button-area {
      button {
        font-size: 20px;
        margin-right: 5px;
      }
    }

    .row {
      margin-bottom: 10px;

      .label {
        margin-left: 20px;
        margin-right: 10px;
      }
    }
  }
}

.mr1 {
  margin-right:10px;
}
</style>
