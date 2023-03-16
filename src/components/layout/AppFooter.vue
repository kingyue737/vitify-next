<template>
  <v-footer app border>
    <v-spacer />
    <AppNotification />
    <ButtonSettings />
  </v-footer>
</template>
<style scoped lang="scss">
.v-footer {
  border-width: 1px 0 0 0;
  padding: 0px 10px;
  :deep(> .v-btn--icon) {
    .v-icon {
      height: 1.25em;
      width: 1.25em;
    }
  }
}
</style>
