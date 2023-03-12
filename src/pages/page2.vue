<template>
  <div>2</div>
  <teleport to="#app-bar">传送一下试试</teleport>
</template>

<script setup lang="ts">
definePage({
  meta: {
    icon: '$mdi-account',
    title: '示例页面2',
    drawerIndex: 1,
  },
})
</script>
