<template>
  <div style="display:inline-block;border: 1px solid #DCDCDC;padding: 5px;">
    <div style="border-bottom: 2px solid #333333"><b>{{ item.header }}</b></div>
    <div v-for="cItem in item.children" style="border-bottom: 1px solid #dcdcdc;padding: 10px">
      <NuxtLink :to="cItem.path">{{ cItem.title }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenuHeaderGroup',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
