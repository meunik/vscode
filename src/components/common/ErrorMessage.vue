<script setup>
const props = defineProps({
  message: {
    type: String,
    default: 'Erro ao carregar dados'
  },
  iconSize: {
    type: String,
    default: 'text-4xl'
  }
})
</script>

<template>
  <div class="flex items-center justify-center gap-2 text-center text-red-400">
    <UIcon name="line-md:alert" :class="iconSize" />
    <p>{{ message }}</p>
  </div>
</template>
