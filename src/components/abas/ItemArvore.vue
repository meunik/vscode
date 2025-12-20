<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  nivel: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['alternarPasta', 'abrirArquivo'])

const alternarPasta = () => {
  if (props.item.tipo === 'pasta') {
    emit('alternarPasta', props.item)
  }
}

const abrirArquivo = () => {
  if (props.item.tipo === 'arquivo') {
    emit('abrirArquivo', props.item)
  }
}

const handleClick = () => {
  if (props.item.tipo === 'pasta') {
    alternarPasta()
  } else {
    abrirArquivo()
  }
}
</script>

<template>
  <div>
    <div
      :class="[
        'flex items-center gap-1.5 py-1 pr-3 cursor-pointer select-none text-texto-principal hover:bg-hover',
        item.tipo === 'pasta' ? 'font-medium' : ''
      ]"
      :style="{ paddingLeft: (20 + nivel * 12) + 'px' }"
      @click="handleClick"
    >
      <span v-if="item.tipo === 'pasta'" class="text-[10px] w-3 flex-shrink-0">
        {{ item.aberta ? '▼' : '▶' }}
      </span>
      <span v-else class="text-xs w-3 flex-shrink-0">📄</span>
      <span class="text-sm flex-shrink-0">{{ item.tipo === 'pasta' ? '📁' : '' }}</span>
      <span class="flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-[13px]">{{ item.nome }}</span>
    </div>
    <div v-if="item.tipo === 'pasta' && item.aberta && item.filhos">
      <ItemArvore
        v-for="filho in item.filhos"
        :key="filho.id"
        :item="filho"
        :nivel="nivel + 1"
        @alternarPasta="emit('alternarPasta', $event)"
        @abrirArquivo="emit('abrirArquivo', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
