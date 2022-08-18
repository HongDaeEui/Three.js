<template>
  <header class="header">
    데스크탑 헤더
    <select v-model="locale">
      <option value="ko">Korean</option>
      <option value="en">English</option>
    </select>
    <div class="menu">
      <component
          :is="resolveNavComponent(item)"
          v-for="(item, itemKey) in navMenuItems"
          :key="'headerMenu' + itemKey"
          :item="item"
      />
    </div>
  </header>
</template>
<script>
import navMenuItems from '@/navigation'

export default {
  name: 'Header',
  components: {
    NavMenuHeaderGroup: () => import('./NavMenuHeaderGroup'),
    NavMenuHeaderLink: () => import('./NavMenuHeaderLink'),
  },
  data() {
    return {
      locale: this.$i18n.locale,
    }
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val
    }
  },
  setup() {
    const resolveNavComponent = item => {
      if (item.children) {
        return 'nav-menu-header-group'
      } else {
        return 'nav-menu-header-link'
      }
    }

    return {
      navMenuItems,
      resolveNavComponent
    }
  },
}
</script>
