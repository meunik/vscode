<script setup>
const props = defineProps({
  habilidades: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'adicionarCategoria', 
  'removerCategoria', 
  'adicionarItem', 
  'removerItem'
])

const adicionarCategoria = () => emit('adicionarCategoria')
const removerCategoria = (index) => emit('removerCategoria', index)
const adicionarItem = (catIndex) => emit('adicionarItem', catIndex)
const removerItem = (catIndex, itemIndex) => emit('removerItem', catIndex, itemIndex)
</script>

<template>
  <div class="space-y-4">
    <div v-for="(cat, catIdx) in habilidades" :key="catIdx" class="p-4 bg-secundario border border-borda-principal rounded">
      <div class="flex items-center justify-between mb-3">
        <input 
          v-model="cat.categoria" 
          type="text" 
          class="text-sm font-semibold bg-transparent border-none text-texto-principal focus:outline-none" 
        />
        <button 
          @click="removerCategoria(catIdx)" 
          class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 hover:cursor-pointer transition-colors"
        >
          Remover
        </button>
      </div>
      <div class="space-y-2">
        <div class="flex gap-2">
          <span class="flex-1 flex items-center gap-1 px-1 font-light text-texto-principal group">
            Ícone
            <a href="https://icones.js.org/" class="text-[12px] hidden group-hover:inline" target="_blank" rel="noopener" title="Lista de ícones">
              <UIcon name="lucide:external-link" />
            </a>
          </span>
          <span class="flex-1 flex items-center px-1 font-light text-texto-principal">Stack</span>
          <button 
            @click="removerItem(catIdx, itemIdx)" 
            class="px-2 py-1.5 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 opacity-0"
          >
            <UIcon name="lucide:trash-2" class="text-[16px]" />
          </button>
        </div>
        <div v-for="(item, itemIdx) in cat.itens" :key="itemIdx" class="flex gap-2">
          <div class="flex gap-2 items-center flex-1">
            <UIcon :name="item.icone" class="text-[20px]" />
            <input 
              v-model="item.icone" 
              type="text" 
              placeholder="Icone" 
              class="flex-1 px-3 py-1.5 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
            />
          </div>
          <input 
            v-model="item.nome" 
            type="text" 
            placeholder="Habilidade" 
            class="flex-1 px-3 py-1.5 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
          />
          <button 
            @click="removerItem(catIdx, itemIdx)" 
            class="px-2 py-1.5 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 hover:cursor-pointer transition-colors"
          >
            <UIcon name="lucide:trash-2" class="text-[16px]" />
          </button>
        </div>
        <button 
          @click="adicionarItem(catIdx)" 
          class="w-full py-1.5 border border-dashed border-borda-principal rounded text-xs text-texto-secundario hover:border-borda-destaque hover:text-texto-destaque hover:cursor-pointer transition-colors"
        >
          + Item
        </button>
      </div>
    </div>
    <button 
      @click="adicionarCategoria" 
      class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-borda-destaque hover:text-texto-destaque hover:cursor-pointer transition-colors"
    >
      + Adicionar Categoria
    </button>
  </div>
</template>
