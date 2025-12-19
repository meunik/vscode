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
  <div class="item-arvore">
    <div
      :class="['item-linha', item.tipo]"
      :style="{ paddingLeft: (20 + nivel * 12) + 'px' }"
      @click="handleClick"
    >
      <span v-if="item.tipo === 'pasta'" class="icone">
        {{ item.aberta ? '▼' : '▶' }}
      </span>
      <span v-else class="icone-arquivo">📄</span>
      <span class="icone-tipo">{{ item.tipo === 'pasta' ? '📁' : '' }}</span>
      <span class="nome">{{ item.nome }}</span>
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
.item-linha {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 12px;
  cursor: pointer;
  user-select: none;
  color: #cccccc;
}

.item-linha:hover {
  background-color: #2a2d2e;
}

.item-linha.pasta {
  font-weight: 500;
}

.icone {
  font-size: 10px;
  width: 12px;
  flex-shrink: 0;
}

.icone-arquivo {
  font-size: 12px;
  width: 12px;
  flex-shrink: 0;
}

.icone-tipo {
  font-size: 14px;
  flex-shrink: 0;
}

.nome {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
}
</style>
