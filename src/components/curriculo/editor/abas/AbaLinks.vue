<script setup>
const props = defineProps({
  links: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['adicionar', 'remover'])

const adicionarLink = () => emit('adicionar')
const removerLink = (index) => emit('remover', index)
</script>

<template>
  <div class="space-y-4">
    <div v-for="(link, idx) in links" :key="idx" class="p-4 bg-secundario border border-borda-principal rounded">
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-sm font-semibold">Link {{ idx + 1 }}</h4>
        <button 
          @click="removerLink(idx)" 
          class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 hover:cursor-pointer transition-colors"
        >
          Remover
        </button>
      </div>
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <label :for="link.tipo" class="w-1/12 font-light text-sm">Tipo:</label>
          <input 
            :id="link.tipo"
            v-model="link.tipo" 
            type="text" 
            placeholder="Tipo" 
            class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
          />
        </div>
        <div class="flex items-center gap-2">
          <label :for="link.titulo" class="w-1/12 font-light text-sm">Título:</label>
          <input 
            :id="link.titulo"
            v-model="link.titulo" 
            type="text" 
            placeholder="Título" 
            class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
          />
        </div>
        <div class="flex items-center gap-2">
          <label :for="link.url" class="w-1/12 font-light text-sm">URL:</label>
          <input 
            :id="link.url"
            v-model="link.url" 
            type="text" 
            placeholder="URL" 
            class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
          />
        </div>
        <div class="flex items-center gap-2">
          <label :for="link.icone" class="w-1/12 font-light text-sm">Ícone:</label>
          <input 
            :id="link.icone"
            v-model="link.icone" 
            type="text" 
            placeholder="Ícone (mdi:github)" 
            class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
          />
        </div>
      </div>
    </div>
    <button 
      @click="adicionarLink" 
      class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-borda-destaque hover:text-texto-destaque hover:cursor-pointer transition-colors"
    >
      + Adicionar Link
    </button>
  </div>
</template>
