<script setup>
import { useEditorAbas } from '@/composables/useEditorAbas'

const { abas, abaAtivaId, ativarAba, fecharAba } = useEditorAbas()

const fecharAbaComEvento = (evento, id) => {
  evento.stopPropagation()
  fecharAba(id)
}
</script>

<template>
  <div class="editor-abas">
    <div v-if="abas.length === 0" class="sem-abas">
      Nenhum arquivo aberto
    </div>
    <div v-else class="lista-abas">
      <div
        v-for="aba in abas"
        :key="aba.id"
        :class="['aba', { ativa: aba.id === abaAtivaId }]"
        @click="ativarAba(aba.id)"
      >
        <span class="aba-titulo">{{ aba.titulo }}</span>
        <button class="aba-fechar" @click="fecharAbaComEvento($event, aba.id)">×</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editor-abas {
  display: flex;
  height: 35px;
  background-color: #252526;
  border-bottom: 1px solid #1e1e1e;
  overflow-x: auto;
  overflow-y: hidden;
}

.editor-abas::-webkit-scrollbar {
  height: 0;
}

.sem-abas {
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: #858585;
  font-size: 13px;
}

.lista-abas {
  display: flex;
  flex: 1;
}

.aba {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  background-color: #2d2d30;
  border-right: 1px solid #1e1e1e;
  color: #969696;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  min-width: 120px;
  max-width: 200px;
  transition: background-color 0.1s;
}

.aba:hover {
  background-color: #2a2d2e;
}

.aba.ativa {
  background-color: #1e1e1e;
  color: #ffffff;
  border-top: 1px solid #007acc;
}

.aba-titulo {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.aba-fechar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  color: #858585;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;
  padding: 0;
  line-height: 1;
}

.aba-fechar:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #cccccc;
}
</style>
