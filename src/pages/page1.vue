<template>
  <v-container>
    <v-btn color="primary" icon="$cancel" @click="test"></v-btn>
    <v-btn color="primary" icon="custom:nustar" @click="test2"></v-btn>
    <v-btn @click="test3"></v-btn>
  </v-container>
</template>

<script setup lang="ts">
definePage({
  meta: {
    icon: '$mdi-home',
    title: '示例页面1',
    drawerIndex: 0,
  },
})
function test() {
  Notify.error('jin')
}
function test2() {
  Notify.warning('jineee')
}
function test3() {
  Notify.success(
    'jinyueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
  )
}
</script>
