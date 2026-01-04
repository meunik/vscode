<script setup>
const props = defineProps({
  message: {
    type: String,
    default: 'Carregando...'
  },
  iconSize: {
    type: String,
    default: 'text-4xl'
  }
})
</script>

<template>
  <div class="flex items-center justify-center gap-2 text-center text-texto-principal">
    <UIcon name="line-md:loading-loop" :class="iconSize" />
    <p>{{ message }}</p>
  </div>
</template>
