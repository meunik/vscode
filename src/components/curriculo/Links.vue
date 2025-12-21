<script>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.links.length > 0" class="mb-8">
  <div class="flex flex-wrap gap-3">
    <a 
      v-for="(link, idx) in dados.links" 
      :key="idx"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 px-4 py-2 bg-secundario border border-borda-principal rounded hover:border-destaque transition-colors text-sm"
    >
      <UIcon :name="link.icone" class="text-base" />
      <span>{{ link.titulo }}</span>
    </a>
  </div>
</div>
</template>