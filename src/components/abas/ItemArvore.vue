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
      class="flex items-center py-1 pr-3 gap-1 cursor-pointer select-none text-texto-principal hover:bg-hover"
      :class="[ item.tipo === 'pasta' ? 'font-medium' : '' ]"
      :style="{ paddingLeft: (10 + nivel * 12) + 'px' }"
      @click="handleClick"
    >
      <UIcon v-if="item.tipo === 'pasta'" :name="item.aberta ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'" class="w-4 shrink-0" />
      <UIcon v-else name="" class="w-4 shrink-0" />
      <UIcon v-if="item.tipo === 'pasta'" name="line-md:folder" class="text-[16px] shrink-0" />
      <UIcon v-else name="line-md:file-document-filled" class="text-[16px] shrink-0" />
      <span class="flex-1 text-[13px] line-clamp-1">{{ item.nome }}</span>
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
