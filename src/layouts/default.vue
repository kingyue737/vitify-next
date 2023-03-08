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
}
</style>
