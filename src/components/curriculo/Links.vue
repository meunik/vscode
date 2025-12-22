<script setup>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.links.length > 0" class="flex flex-col text-texto-secundario">
  <template v-for="(link, index) in dados.links" :key="index">
    <a v-if="link.url" :href="link.url" class="flex items-center gap-2">
      <UIcon :name="link.icone" class="text-[18px]" />
      <span class="hover:text-texto-destaque hover:underline">{{ link.titulo }}</span>
    </a>
    <span v-else class="flex items-center gap-2">
      <UIcon :name="link.icone" class="text-[18px]" />
      <span>{{ link.titulo }}</span>
    </span>
  </template>
</div>
</template>