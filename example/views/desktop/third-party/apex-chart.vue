<template>
  <div class="content">
    <h1>데스크탑</h1>
    <h2>ApexChart</h2>
    <div class="row">
      <client-only>
        <vue-apex-charts
            type="bar"
            height="350"
            :options="barChart.chartOptions"
            :series="barChart.series"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
import Controller from '@/pages/third-party/apex-chart'

export default {
  extends: Controller,
}
</script>
