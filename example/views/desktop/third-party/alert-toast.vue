<template>
  <div class="content">
    <h1>데스크탑</h1>
    <h2>Alert</h2>
    <div class="button-area">
      <button @click="sweetAlert">Sweet Alert</button>
    </div>
    <hr/>
    <h2>Toast</h2>
    <div class="button-area">
      <button @click="toast">Toast</button>
    </div>
  </div>
</template>

<script>
import Controller from '@/pages/third-party/alert-toast'

export default {
  extends: Controller,
}
</script>
