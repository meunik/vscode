<script setup>
const props = defineProps({
  formacoes: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['adicionar', 'remover'])

const adicionarFormacao = () => emit('adicionar')
const removerFormacao = (index) => emit('remover', index)
</script>

<template>
  <div class="space-y-4">
    <div v-for="(edu, idx) in formacoes" :key="idx" class="p-4 bg-secundario border border-borda-principal rounded">
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-sm font-semibold">{{ edu.curso }}</h4>
        <button 
          @click="removerFormacao(idx)" 
          class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 hover:cursor-pointer transition-colors"
        >
          Remover
        </button>
      </div>
      <div class="space-y-3">
        <input 
          v-model="edu.curso" 
          type="text" 
          placeholder="Curso" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <input 
          v-model="edu.instituicao" 
          type="text" 
          placeholder="Instituição" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <input 
          v-model="edu.periodo" 
          type="text" 
          placeholder="2018 - 2021" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <select 
          v-model="edu.status" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors"
        >
          <option value="Concluído">Concluído</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Trancado">Trancado</option>
        </select>
      </div>
    </div>
    <button 
      @click="adicionarFormacao" 
      class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-borda-destaque hover:text-texto-destaque hover:cursor-pointer transition-colors"
    >
      + Adicionar Educação
    </button>
  </div>
</template>
