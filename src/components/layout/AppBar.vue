<script setup lang="ts">
const { drawer } = storeToRefs(useAppStore())
</script>

<template>
  <v-app-bar app color="transparent" height="60px">
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-spacer />
  </v-app-bar>
</template>

<style lang="scss" scoped>
.v-app-bar {
  backdrop-filter: blur(10px);
  .v-btn:not(.v-btn--text):not(.v-btn--outlined):focus:before {
    opacity: 0;
  }
}
@supports not (backdrop-filter: blur(10px)) {
  .theme--light .v-app-bar {
    background-color: rgba(242, 245, 248, 0.8) !important;
  }
  .theme--dark .v-app-bar {
    background-color: rgba(18, 18, 18, 0.8) !important;
  }
}
</style>
