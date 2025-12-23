<script setup>
import Icon from '@/assets/icons/Icon.vue';
</script>

<template>
  <div class="bg-header w-full flex justify-between items-center h-6 px-2 relative noPrint">
    <div class="flex items-center gap-1">
      <Icon name="circulo" :size="15" class="text-[#ed6a5e]" />
      <Icon name="circulo" :size="15" class="text-[#f4bf4f]" />
      <Icon name="circulo" :size="15" class="text-[#61c554]" />
    </div>
    <span class="text-texto-principal">Marcos Paulo</span>
    <div class="w-espacinho">&nbsp;</div>
  </div>
</template>

<style scoped>
.w-espacinho {
  width: 3.5rem !important;
}
</style>