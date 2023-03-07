<template>
  <AppDrawer />
  <AppBar />
  <v-main>
    <router-view />
  </v-main>
</template>

<script setup lang="ts">
import AppBar from '../components/layout/AppBar.vue'
import AppDrawer from '../components/layout/AppDrawer.vue'
</script>

<style scoped lang="scss">
.v-main {
  padding-top: 0;
  margin-top: var(--v-layout-top);
}
</style>
