<script setup>
import { useEditorAbas } from '@/composables/useEditorAbas'
import { obterIconeArquivo } from '@/utils/icones'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { abas, ativarAba, fecharAba, abaAtivaId, fecharTodasAbas } = useEditorAbas()

const handleFecharAba = (aba) => fecharAba(aba.id)
const handleAtivarAba = (aba) => ativarAba(aba.id)

// Redimensionamento de Editores Abertos
const ALTURA_ITEM = 23.5 // altura aproximada de cada item em pixels
const MAX_ITENS_VISIVEIS = 5
const alturaEditores = ref(0)
const estaRedimensionando = ref(false)
const posicaoInicial = ref(0)
const alturaInicial = ref(0)

const alturaMinima = computed(() => Math.min(abas.value.length, MAX_ITENS_VISIVEIS) * ALTURA_ITEM)
const alturaMaxima = computed(() => abas.value.length * ALTURA_ITEM)
const mostrarHandle = computed(() => abas.value.length > MAX_ITENS_VISIVEIS)

const estiloEditores = computed(() => {
  if (abas.value.length <= MAX_ITENS_VISIVEIS) {
    return { maxHeight: 'none' }
  }
  const altura = alturaEditores.value || alturaMinima.value
  return {
    maxHeight: `${altura}px`,
    overflow: 'hidden auto'
  }
})

const iniciarRedimensionamento = (evento) => {
  estaRedimensionando.value = true
  posicaoInicial.value = evento.clientY
  alturaInicial.value = alturaEditores.value || alturaMinima.value
  evento.preventDefault()
}

const redimensionar = (evento) => {
  if (!estaRedimensionando.value) return
  
  const delta = evento.clientY - posicaoInicial.value
  let novaAltura = alturaInicial.value + delta
  
  novaAltura = Math.max(alturaMinima.value, novaAltura)
  novaAltura = Math.min(alturaMaxima.value, novaAltura)
  
  alturaEditores.value = novaAltura
}

const finalizarRedimensionamento = () => {
  estaRedimensionando.value = false
}

onMounted(() => {
  document.addEventListener('mousemove', redimensionar)
  document.addEventListener('mouseup', finalizarRedimensionamento)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', redimensionar)
  document.removeEventListener('mouseup', finalizarRedimensionamento)
})
</script>

<template>
  <div v-if="abas.length > 0" class="mb-2">
    <div class="flex items-center justify-between px-2 py-2 pt-2 pb-0 text-[11px] font-semibold text-texto-secundario uppercase tracking-wider group">
      <span>EDITORES ABERTOS</span>
      <button 
        class="flex items-center justify-center w-5 h-5 bg-transparent border-none text-texto-secundario cursor-pointer rounded hover:bg-hover hover:text-texto-principal transition-colors"
        @click="fecharTodasAbas"
        title="Fechar Todos os Editores"
      >
        <UIcon name="material-symbols:tab-close-outline-rounded" class="w-4 h-4 hidden group-hover:flex" />
      </button>
    </div>
    <div class="py-0 relative">
      <div class="sm-scrollbar" :style="estiloEditores">
        <div
          v-for="aba in abas"
          :key="aba.id"
          class="flex items-center gap-1 pl-3 pr-1 py-0.5 cursor-pointer select-none group"
          :class="[abaAtivaId === aba.id ? 'bg-ativo' : 'hover:bg-hover']"
          @click="handleAtivarAba(aba)"
        >
          <UIcon :name="obterIconeArquivo(aba.titulo)" class="text-[16px] shrink-0" />
          <span class="flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-[13px]">{{ aba.titulo }}</span>
          <button class="items-center justify-center w-4.5 h-4.5 bg-transparent border-none text-texto-secundario text-lg cursor-pointer rounded p-0 leading-none hidden hover:bg-hover hover:text-texto-principal group-hover:flex" @click.stop="handleFecharAba(aba)">
            <UIcon name="lucide-x" class="w-4 shrink-0" />
          </button>
        </div>
      </div>
      <div 
        v-if="mostrarHandle"
        class="h-1 cursor-ns-resize hover:bg-borda-destaque transition-colors"
        @mousedown="iniciarRedimensionamento"
      ></div>
    </div>
  </div>
</template>
