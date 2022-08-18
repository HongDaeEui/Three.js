<template>
  <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
</template>

<script>
export default {
  name: 'NavMenuHeaderLink',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
