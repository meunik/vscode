<script>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.idiomas.length > 0" class="mb-8">
  <h3 class="flex items-center gap-2 text-2xl font-bold mb-4 text-texto-principal">
    <Icon name="globo" :size="24" />
    Idiomas
  </h3>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div 
      v-for="(idioma, idx) in dados.idiomas" 
      :key="idx"
      class="p-3 bg-secundario border border-borda-principal rounded text-center"
    >
      <p class="text-sm font-semibold text-texto-principal mb-1">{{ idioma.idioma }}</p>
      <p class="text-xs text-texto-secundario">{{ idioma.nivel }}</p>
    </div>
  </div>
</div>
</template>