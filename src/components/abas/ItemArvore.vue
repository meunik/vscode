<script setup>
import { computed } from 'vue'
import { obterIconeArquivo } from '@/utils/icones'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  nivel: {
    type: Number,
    default: 0
  },
  abaAtivaId: {
    type: Number,
    default: null
  },
  abas: {
    type: Array,
    default: () => []
  },
  itemSelecionado: {
    type: Object,
    default: null
  },
  ocultarArquivoAtivo: {
    type: Boolean,
    default: false
  },
  carregandoRepositorios: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['alternarPasta', 'abrirArquivo', 'selecionarItem'])

const iconeArquivo = computed(() => {
  if (props.item.tipo === 'pasta') return null
  return obterIconeArquivo(props.item.nome)
})

const estaAtivo = computed(() => {
  if (props.item.tipo === 'arquivo' && props.abaAtivaId) {
    if (props.ocultarArquivoAtivo) return false
    if (props.itemSelecionado && props.itemSelecionado.tipo === 'pasta') return false
    const abaAtiva = props.abas.find(aba => aba.id === props.abaAtivaId)
    return abaAtiva && abaAtiva.caminho === props.item.caminho
  }
  return false
})

const estaSelecionado = computed(() => {
  if (!props.itemSelecionado) return false
  if (props.item.tipo === 'pasta') return props.itemSelecionado.caminho === props.item.caminho
  return false
})

const ehPastaGithub = computed(() => {
  return props.item.tipo === 'pasta' && props.item.caminho === 'Profissional/GitHub'
})

const alternarPasta = () => {
  if (props.item.tipo === 'pasta') {
    emit('alternarPasta', props.item)
    emit('selecionarItem', props.item)
  }
}

const abrirArquivo = () => {
  if (props.item.tipo === 'arquivo') emit('abrirArquivo', props.item)
}

const handleClick = () => {
  if (props.item.tipo === 'pasta') alternarPasta()
  else abrirArquivo()
}
</script>

<template>
  <div>
    <div
      class="flex items-center py-0.5 pr-0.5 gap-1 cursor-pointer select-none text-texto-principal"
      :class="[
        item.tipo === 'pasta' ? 'font-medium' : '',
        estaAtivo || estaSelecionado ? 'bg-ativo' : 'hover:bg-hover'
      ]"
      :style="{ paddingLeft: (10 + nivel * 12) + 'px' }"
      @click.stop="handleClick"
    >
      <UIcon v-if="item.tipo === 'pasta'" :name="item.aberta ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'" class="w-4 shrink-0" />
      <UIcon v-else name="" class="w-4 shrink-0" />
      <UIcon v-if="item.tipo === 'pasta'" name="line-md:folder" class="text-[16px] shrink-0" />
      <UIcon v-else :name="iconeArquivo" class="text-[16px] shrink-0" />
      <span class="flex-1 text-[13px] tresPontinhos">{{ item.nome }}</span>
      <UIcon v-if="ehPastaGithub && carregandoRepositorios" name="line-md:loading-twotone-loop" class="text-[14px] shrink-0 text-texto-secundario" />
    </div>
    <div v-if="item.tipo === 'pasta' && item.aberta && item.filhos">
      <ItemArvore
        v-for="filho in item.filhos"
        :key="filho.id"
        :item="filho"
        :ocultar-arquivo-ativo="ocultarArquivoAtivo"
        :nivel="nivel + 1"
        :aba-ativa-id="abaAtivaId"
        :abas="abas"
        :item-selecionado="itemSelecionado"
        :carregando-repositorios="carregandoRepositorios"
        @alternarPasta="emit('alternarPasta', $event)"
        @abrirArquivo="emit('abrirArquivo', $event)"
        @selecionarItem="emit('selecionarItem', $event)"
      />
    </div>
  </div>
</template>
