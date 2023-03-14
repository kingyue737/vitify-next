<template>
  <AppDrawer />
  <AppBar />
  <v-main>
    <router-view />
  </v-main>
  <AppFooter />
</template>

<style scoped lang="scss">
.v-main {
  padding-top: 0;
  margin-top: var(--v-layout-top);
  padding-bottom: 0;
  margin-bottom: var(--v-layout-bottom);
  height: calc(100vh - var(--v-layout-top) - var(--v-layout-bottom));
  overflow-y: auto;
}
</style>
