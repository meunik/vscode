<script setup>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.projetos.length > 0" class="mb-8">
  <h3 class="flex items-center gap-2 text-2xl font-bold mb-4 text-texto-principal">
    <Icon name="estrela" :size="24" />
    Projetos
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div 
      v-for="(projeto, idx) in dados.projetos" 
      :key="idx"
      class="p-4 bg-secundario border border-borda-principal rounded hover:border-destaque transition-colors"
    >
      <a 
        :href="projeto.url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="block"
      >
        <h4 class="text-lg font-semibold text-texto-principal mb-2 hover:text-destaque transition-colors">
          {{ projeto.nome }}
        </h4>
        <p class="text-sm text-texto-secundario mb-3">{{ projeto.descricao }}</p>
        <div v-if="projeto.tecnologias.length > 0" class="flex flex-wrap gap-2">
          <span 
            v-for="(tech, tIdx) in projeto.tecnologias" 
            :key="tIdx"
            class="px-2 py-1 bg-principal text-destaque text-xs rounded border border-borda-principal"
          >
            {{ tech }}
          </span>
        </div>
      </a>
    </div>
  </div>
</div>
</template>