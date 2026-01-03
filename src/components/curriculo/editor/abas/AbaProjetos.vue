<script setup>
const props = defineProps({
  projetos: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'adicionar', 
  'remover', 
  'adicionarTecnologia', 
  'removerTecnologia'
])

const adicionarProjeto = () => emit('adicionar')
const removerProjeto = (index) => emit('remover', index)
const adicionarTecnologia = (projIndex) => emit('adicionarTecnologia', projIndex)
const removerTecnologia = (projIndex, techIndex) => emit('removerTecnologia', projIndex, techIndex)
</script>

<template>
  <div class="space-y-4">
    <div v-for="(proj, idx) in projetos" :key="idx" class="p-4 bg-secundario border border-borda-principal rounded">
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-sm font-semibold">{{ proj.nome }}</h4>
        <button 
          @click="removerProjeto(idx)" 
          class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 hover:cursor-pointer transition-colors"
        >
          Remover
        </button>
      </div>
      <div class="space-y-3">
        <input 
          v-model="proj.nome" 
          type="text" 
          placeholder="Nome do Projeto" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <textarea 
          v-model="proj.descricao" 
          rows="3" 
          placeholder="Descrição" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors resize-none"
        ></textarea>
        <input 
          v-model="proj.url" 
          type="url" 
          placeholder="URL" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <div class="space-y-2 pt-2 border-t border-borda-principal">
          <label class="flex-1 flex items-center gap-1 text-xs font-medium text-texto-secundario group">
            Stacks (ícones)
            <a href="https://icones.js.org/" class="text-[12px] hidden group-hover:inline" target="_blank" rel="noopener" title="Lista de ícones">
              <UIcon name="lucide:external-link" />
            </a>
          </label>
          <div v-for="(tech, tIdx) in proj.tecnologias" :key="tIdx" class="flex gap-2 items-center">
            <UIcon :name="tech" class="text-[20px]" />
            <input 
              v-model="proj.tecnologias[tIdx]" 
              type="text" 
              class="flex-1 px-3 py-1.5 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
            />
            <button 
              @click="removerTecnologia(idx, tIdx)" 
              class="px-2 py-1.5 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 hover:cursor-pointer transition-colors"
            >
              <UIcon name="lucide:trash-2" class="text-[16px]" />
            </button>
          </div>
          <button 
            @click="adicionarTecnologia(idx)" 
            class="w-full py-1.5 border border-dashed border-borda-principal rounded text-xs text-texto-secundario hover:border-borda-destaque hover:text-texto-destaque hover:cursor-pointer transition-colors"
          >
            + Stacks
          </button>
        </div>
      </div>
    </div>
    <button 
      @click="adicionarProjeto" 
      class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-borda-destaque hover:text-texto-destaque hover:cursor-pointer transition-colors"
    >
      + Adicionar Projeto
    </button>
  </div>
</template>
