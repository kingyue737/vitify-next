<template>
  <AppDrawer />
  <AppBar />
  <v-main>
    <router-view />
  </v-main>
  <AppFooter />
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core'
const route = useRoute()
const title = computed(() => {
  const title = route.meta?.title || route.matched[0].meta?.title || ''
  return title ? `${title} | Vitify Admin` : 'Vitify Admin'
})
useTitle(title)
</script>

<style scoped>
.v-main {
  padding-top: 0;
  margin-top: var(--v-layout-top);
  padding-bottom: 0;
  margin-bottom: var(--v-layout-bottom);
  height: calc(100vh - var(--v-layout-top) - var(--v-layout-bottom));
  overflow-y: auto;
  transition-property: padding;
}
</style>
