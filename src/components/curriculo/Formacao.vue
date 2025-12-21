<script setup>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.formacao.length > 0" class="flex flex-col gap-2">
  <h3 class="flex items-center gap-1 text-[12px] font-light text-texto-principal">
    <span>meunik</span>
    <span class="text-texto-destaque">/</span>
    <span class="font-normal">FORMAÇÃO ACADÊMICA</span>
    <span class="text-texto-destaque">.txt</span>
  </h3>
  <div class="space-y-4">
    <div 
      v-for="(edu, idx) in dados.formacao" 
      :key="idx"
      class="p-4 bg-secundario rounded"
    >
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-lg font-semibold text-texto-principal">{{ edu.curso }}</h4>
        <span class="text-xs px-2 py-1 rounded" :class="edu.status === 'Concluído' 
          ? 'bg-green-200 text-green-700' 
          : 'bg-blue-200 text-blue-700'">
          {{ edu.status }}
        </span>
      </div>
      <p class="text-sm text-texto-destaque mb-1">{{ edu.instituicao }}</p>
      <p class="text-xs text-texto-secundario">{{ edu.periodo }}</p>
    </div>
  </div>
</div>
</template>