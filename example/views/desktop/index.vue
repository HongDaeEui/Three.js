<template>
  <div class="content">
    <h1>데스크톱 메인페이지</h1>
    <button @click="hello()">Hello</button>
    <button @click="desktopHello()">Desktop Hello</button>
  </div>
</template>

<script>
import Controller from '@/pages/index'

export default {
  extends: Controller,
  methods: {
    desktopHello() {
      alert('desktop hello')
    }
  },
  head() {
    return {
      title: 'Home Desktop',
    }
  },
};
</script>
