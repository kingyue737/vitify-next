<template>
  <v-container>
    <v-btn @click="test"></v-btn>
    <v-btn @click="test2"></v-btn>
    <v-btn @click="test3"></v-btn>
  </v-container>
</template>

<script setup lang="ts">
definePage({
  meta: {
    icon: '$mdi-home',
    title: '示例页面1',
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
