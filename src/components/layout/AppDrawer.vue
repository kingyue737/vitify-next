<script setup lang="ts">
import { routes } from 'vue-router/auto/routes'

const appStore = useAppStore()
const {
  drawer: drawerStored,
  drawerImage,
  drawerImageShow,
} = storeToRefs(appStore)

const { mobile, lgAndUp, width } = useDisplay()
const drawer = computed({
  get() {
    return drawerStored.value || !mobile.value
  },
  set(val: boolean) {
    drawerStored.value = val
  },
})
const rail = computed(() => !drawerStored.value && !mobile.value)
const gradient = computed(() =>
  useTheme().current.value.dark
    ? 'to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)'
    : 'to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, .7)'
)

nextTick(() => {
  drawerStored.value = lgAndUp.value && width.value !== 1280
})
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    :expand-on-hover="rail"
    :image="drawerImage"
    :rail="rail"
  >
    <template #image="{ image }">
      <v-img
        v-show="drawerImageShow"
        cover
        class=""
        :gradient="gradient"
        :src="image"
        height="100%"
      />
    </template>
    <template #prepend>
      <v-list dense nav class="drawer-header">
        <v-list-item prepend-avatar="/favicon.svg" class="pa-1">
          <v-list-item-title class="text-h5" style="line-height: 2rem">
            Vitify <span class="text-primary">Admin</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider />
    </template>
    <v-list nav density="compact">
      <template v-for="route in routes" :key="route.name">
        <v-list-item
          v-if="route.meta?.icon"
          :prepend-icon="route.meta?.icon"
          :title="route.meta?.title"
          :to="{ name: route.name }"
          active-color="primary"
        >
        </v-list-item>
      </template>
    </v-list>
    <v-spacer />
    <template #append>
      <v-list-item class="drawer-footer px-0 d-flex flex-column justify-center">
        <div />
        <div class="text-body-2 font-weight-light pt-6 pt-md-0 text-center">
          &copy; Copyright 2023
          <a
            href="https://github.com/kingyue737"
            class="font-weight-regular"
            target="_blank"
            >Yue JIN</a
          >
          <span> & </span>
          <a
            href="https://www.nustarnuclear.com/"
            class="font-weight-regular"
            target="_blank"
            >NuStar</a
          >
        </div>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss">
.v-navigation-drawer {
  &.v-navigation-drawer--rail {
    &.v-navigation-drawer--is-hovering {
      box-shadow: 0px 0px 6px 2px rgba(100, 100, 100, 0.6);
    }
    &:not(.v-navigation-drawer--is-hovering) {
      .drawer-footer {
        transform: translateX(-160px);
      }
      .v-avatar {
        --v-avatar-height: 32px !important;
      }
    }
  }
  .v-navigation-drawer__content {
    overflow-y: overlay;
  }
  .drawer-footer {
    transition: all 0.3s;
    min-height: 30px;
    div {
      white-space: nowrap;
    }
    &::after {
      min-height: 0;
    }
  }
  .drawer-header {
    .v-avatar {
      border-radius: 0;
    }
  }
}
</style>
