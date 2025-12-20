<script setup>
import { computed } from 'vue'

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
  }
})

const emit = defineEmits(['alternarPasta', 'abrirArquivo'])

const estaAtivo = computed(() => {
  if (props.item.tipo === 'arquivo' && props.abaAtivaId) {
    const abaAtiva = props.abas.find(aba => aba.id === props.abaAtivaId)
    return abaAtiva && abaAtiva.caminho === props.item.caminho
  }
  return false
})

const alternarPasta = () => {
  if (props.item.tipo === 'pasta') emit('alternarPasta', props.item)
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
      class="flex items-center py-1 pr-0.5 gap-1 cursor-pointer select-none text-texto-principal"
      :class="[
        item.tipo === 'pasta' ? 'font-medium' : '',
        estaAtivo ? 'bg-ativo' : 'hover:bg-hover'
      ]"
      :style="{ paddingLeft: (10 + nivel * 12) + 'px' }"
      @click="handleClick"
    >
      <UIcon v-if="item.tipo === 'pasta'" :name="item.aberta ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'" class="w-4 shrink-0" />
      <UIcon v-else name="" class="w-4 shrink-0" />
      <UIcon v-if="item.tipo === 'pasta'" name="line-md:folder" class="text-[16px] shrink-0" />
      <UIcon v-else name="line-md:file-document-filled" class="text-[16px] shrink-0" />
      <span class="flex-1 text-[13px] tresPontinhos">{{ item.nome }}</span>
    </div>
    <div v-if="item.tipo === 'pasta' && item.aberta && item.filhos">
      <ItemArvore
        v-for="filho in item.filhos"
        :key="filho.id"
        :item="filho"
        :nivel="nivel + 1"
        :aba-ativa-id="abaAtivaId"
        :abas="abas"
        @alternarPasta="emit('alternarPasta', $event)"
        @abrirArquivo="emit('abrirArquivo', $event)"
      />
    </div>
  </div>
</template>
