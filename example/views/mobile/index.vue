<template>
  <div class="content">
    <h1>모바일 메인페이지</h1>
    <button @click="hello()">Hello</button>
    <button @click="mobileHello()">Mobile Hello</button>
  </div>
</template>

<script>
import Controller from '@/pages/index'

export default {
  extends: Controller,
  methods: {
    mobileHello() {
      alert('mobile hello')
    }
  },
  head() {
    return {
      title: 'Home Mobile'
    }
  },
};
</script>
