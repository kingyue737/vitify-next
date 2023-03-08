<script setup lang="ts">
const { drawer } = storeToRefs(useAppStore())
const route = useRoute()
</script>

<template>
  <v-app-bar flat border style="border-width: 0 0 1px 0">
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-app-bar-title>{{ route.meta.title }}</v-app-bar-title>
    <v-spacer />
    <div id="app-bar"></div>
  </v-app-bar>
</template>
