<script setup>
const props = defineProps({
  idiomas: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['adicionar', 'remover'])

const adicionarIdioma = () => emit('adicionar')
const removerIdioma = (index) => emit('remover', index)
</script>

<template>
  <div class="space-y-4">
    <div v-for="(idioma, idx) in idiomas" :key="idx" class="p-4 bg-secundario border border-borda-principal rounded">
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-sm font-semibold">{{ idioma.idioma }}</h4>
        <button 
          @click="removerIdioma(idx)" 
          class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 hover:cursor-pointer transition-colors"
        >
          Remover
        </button>
      </div>
      <div class="space-y-3">
        <input 
          v-model="idioma.idioma" 
          type="text" 
          placeholder="Idioma" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <select 
          v-model="idioma.nivel" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors"
        >
          <option value="Básico">Básico</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
          <option value="Fluente">Fluente</option>
          <option value="Nativo">Nativo</option>
        </select>
      </div>
    </div>
    <button 
      @click="adicionarIdioma" 
      class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-borda-destaque hover:text-texto-destaque hover:cursor-pointer transition-colors"
    >
      + Adicionar Idioma
    </button>
  </div>
</template>
