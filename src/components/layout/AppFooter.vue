<template>
  <v-footer app>
    <v-spacer />
    <v-defaults-provider
      :defaults="{ VBtn: { variant: 'text', size: 'x-small' } }"
    >
      <AppNotification />
      <ButtonSettings />
    </v-defaults-provider>
  </v-footer>
</template>
<style>
.v-footer {
  padding: 0px 10px;
  > .v-btn--icon {
    .v-icon {
      --v-icon-size-multiplier: 0.875;
    }
  }
}
</style>
