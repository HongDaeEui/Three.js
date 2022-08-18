<template>
  <component :is="app.layoutType"/>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'ApexChart',
  components: {
    DesktopDevice: () => import('@/views/desktop/third-party/apex-chart'),
    MobileDevice: () => import('@/views/mobile/third-party/apex-chart'),
    [process.browser && 'VueApexCharts']: () => import('vue-apexcharts')
  },
  data() {
    return {
      barChart: {
        series: [
          {
            data: [700, 350, 480, 600, 210, 550, 150],
          },
        ],
        chartOptions: {
          xaxis: {
            categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23'],
          },
        },
      },
    }
  },
  computed: {
    ...mapState(['app']),
  },
  methods: {
  },
  head() {
    return {
      title: 'ApexChart'
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
