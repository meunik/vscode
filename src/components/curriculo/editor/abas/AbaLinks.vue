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
        <input 
          v-model="link.tipo" 
          type="text" 
          placeholder="Tipo" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <input 
          v-model="link.titulo" 
          type="text" 
          placeholder="Título" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <input 
          v-model="link.url" 
          type="url" 
          placeholder="URL" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <input 
          v-model="link.icone" 
          type="text" 
          placeholder="Ícone (mdi:github)" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
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
