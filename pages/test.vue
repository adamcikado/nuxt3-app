<template>
  <div>{{data.title}}</div>
</template>

<script lang="ts" setup>
const data = ref<Record<string, any> | null>(null)

const asyncData = await useAsyncData('test', async () => {
  return 'test'
})
</script>