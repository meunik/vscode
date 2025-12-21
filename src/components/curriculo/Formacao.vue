<script>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.formacao.length > 0" class="mb-8">
  <h3 class="flex items-center gap-2 text-2xl font-bold mb-4 text-texto-principal">
    <Icon name="livro" :size="24" />
    Educação
  </h3>
  <div class="space-y-4">
    <div 
      v-for="(edu, idx) in dados.formacao" 
      :key="idx"
      class="p-4 bg-secundario border border-borda-principal rounded"
    >
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-lg font-semibold text-texto-principal">{{ edu.curso }}</h4>
        <span class="text-xs px-2 py-1 rounded" :class="edu.status === 'Concluído' ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'">
          {{ edu.status }}
        </span>
      </div>
      <p class="text-sm text-destaque mb-1">{{ edu.instituicao }}</p>
      <p class="text-xs text-texto-secundario">{{ edu.periodo }}</p>
    </div>
  </div>
</div>
</template>