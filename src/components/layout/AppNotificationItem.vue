<script setup lang="ts">
import { useTimeoutFn } from '@vueuse/core'
import type { Notification } from '@/stores/notification'

const props = withDefaults(
  defineProps<{
    timeout: number
    notification: Notification
  }>(),
  { timeout: 5000 },
)
const emit = defineEmits(['close'])
const isShow = defineModel<boolean>({ default: false })
const timeout = toRef(props, 'timeout')
const { start, stop } = useTimeoutFn(() => (isShow.value = false), timeout, {
  immediate: false,
})
watch(timeout, (v) => (v !== -1 ? start() : stop()), { immediate: true })
const showAll = computed(() => timeout.value === -1)
</script>

<template>
  <v-alert
    :variant="showAll ? 'outlined' : 'flat'"
    :border="showAll ? 'start' : false"
    :density="showAll ? 'compact' : undefined"
    :theme="showAll ? undefined : 'dark'"
    :elevation="showAll ? 0 : 3"
    :type="notification.type"
    :text="notification.text"
    :title="notification.time.toLocaleString()"
  >
    <template #close>
      <v-btn icon="$close" @click="emit('close')" />
    </template>
  </v-alert>
</template>

<style scoped>
:deep(.v-alert-title) {
  line-height: 1.25rem;
  font-size: 14px;
  font-weight: 300;
}
</style>
