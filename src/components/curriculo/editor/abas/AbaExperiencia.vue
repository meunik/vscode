<script setup>
const props = defineProps({
  experiencias: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'adicionar', 
  'remover', 
  'adicionarRealizacao', 
  'removerRealizacao',
  'adicionarStack',
  'removerStack'
])

const adicionarExperiencia = () => emit('adicionar')
const removerExperiencia = (index) => emit('remover', index)
const adicionarRealizacao = (expIndex) => emit('adicionarRealizacao', expIndex)
const removerRealizacao = (expIndex, realIndex) => emit('removerRealizacao', expIndex, realIndex)
const adicionarStack = (expIndex) => emit('adicionarStack', expIndex)
const removerStack = (expIndex, stackIndex) => emit('removerStack', expIndex, stackIndex)
</script>

<template>
  <div class="space-y-4">
    <div v-for="(exp, idx) in experiencias" :key="idx" class="p-4 bg-secundario border border-borda-principal rounded">
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-sm font-semibold">{{ exp.cargo }}</h4>
        <button 
          @click="removerExperiencia(idx)" 
          class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 hover:cursor-pointer transition-colors"
        >
          Remover
        </button>
      </div>
      <div class="space-y-3">
        <input 
          v-model="exp.cargo" 
          type="text" 
          placeholder="Cargo" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <input 
          v-model="exp.empresa" 
          type="text" 
          placeholder="Empresa" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <input 
          v-model="exp.periodo" 
          type="text" 
          placeholder="Jan 2022 - Presente" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
        />
        <textarea 
          v-model="exp.descricao" 
          rows="3" 
          placeholder="Descrição" 
          class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors resize-none"
        ></textarea>
        <div class="space-y-2 pt-2 border-t border-borda-principal">
          <label class="block text-xs font-medium text-texto-secundario">Realizações</label>
          <div v-for="(real, rIdx) in exp.realizacoes" :key="rIdx" class="flex gap-2">
            <input 
              v-model="exp.realizacoes[rIdx]" 
              type="text" 
              class="flex-1 px-3 py-1.5 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
            />
            <button 
              @click="removerRealizacao(idx, rIdx)" 
              class="px-2 py-1.5 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 hover:cursor-pointer transition-colors"
            >
              <UIcon name="lucide:trash-2" class="text-[16px]" />
            </button>
          </div>
          <button 
            @click="adicionarRealizacao(idx)" 
            class="w-full py-1.5 border border-dashed border-borda-principal rounded text-xs text-texto-secundario hover:border-borda-destaque hover:text-texto-destaque hover:cursor-pointer transition-colors"
          >
            + Realização
          </button>
        </div>
        <div class="space-y-2 pt-2 border-t border-borda-principal">
          <label class="flex-1 flex items-center gap-1 text-xs font-medium text-texto-secundario group">
            Stacks (ícones)
            <a href="https://icones.js.org/" class="text-[12px] hidden group-hover:inline" target="_blank" rel="noopener" title="Lista de ícones">
              <UIcon name="lucide:external-link" />
            </a>
          </label>
          <div v-for="(stack, sIdx) in exp.stacks" :key="sIdx" class="flex gap-2 items-center">
            <UIcon :name="stack" class="text-[20px]" />
            <input 
              v-model="exp.stacks[sIdx]" 
              type="text" 
              placeholder="Ex: devicon:laravel"
              class="flex-1 px-3 py-1.5 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
            />
            <button 
              @click="removerStack(idx, sIdx)" 
              class="px-2 py-1.5 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 hover:cursor-pointer transition-colors"
            >
              <UIcon name="lucide:trash-2" class="text-[16px]" />
            </button>
          </div>
          <button 
            @click="adicionarStack(idx)" 
            class="w-full py-1.5 border border-dashed border-borda-principal rounded text-xs text-texto-secundario hover:border-borda-destaque hover:text-texto-destaque hover:cursor-pointer transition-colors"
          >
            + Stack
          </button>
        </div>
      </div>
    </div>
    <button 
      @click="adicionarExperiencia" 
      class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-destaque hover:text-destaque transition-colors"
    >
      + Adicionar Experiência
    </button>
  </div>
</template>
