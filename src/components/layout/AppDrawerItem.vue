<script lang="ts">
import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router/auto'

export default defineComponent({
  name: 'AppDrawerItem',
  props: {
    level: {
      type: Number,
      default: 0,
    },
    item: {
      type: Object as PropType<RouteRecordRaw>,
      required: true,
    },
  },
  computed: {
    isItem() {
      return !this.item.children || this.visibleChildrenNum <= 1
    },
    indexItem() {
      if (this.item.children) {
        return this.item.children[0]
      } else {
        return this.item
      }
    },
    icon() {
      return this.item.meta?.icon || undefined
    },
    title() {
      return this.item.meta?.title || ''
    },
    visibleChildren() {
      return this.item.children
        ?.filter((child) => child.meta?.icon)
        .sort(
          (a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98)
        )
    },
    visibleChildrenNum() {
      return this.visibleChildren?.length || 0
    },
    group() {
      return (
        this.item.path ||
        this.item.name ||
        this.item.children?.find((v) => !v.path)?.name
      )
    },
  },
})
</script>

<template>
  <v-list-item
    v-if="isItem && icon"
    :to="{ name: item.name || visibleChildren?.[0].name }"
    :prepend-icon="icon"
    active-class="bg-primary text-white"
    :title="title"
  >
  </v-list-item>
  <v-list-group v-else-if="icon" :prepend-icon="icon" active-color="primary">
    <template #activator="{ props }">
      <v-list-item :title="title" v-bind="props"></v-list-item>
    </template>
    <AppDrawerItem
      v-for="child in visibleChildren"
      :key="child.name"
      :item="child"
      :level="level + 1"
    />
  </v-list-group>
</template>

<style lang="scss" scoped></style>
