<script setup>
import { computed } from 'vue'
import { useEditorAbas } from '@/composables/useEditorAbas'

const { abas, abaAtivaId } = useEditorAbas()

const abaAtual = computed(() => {
  return abas.value.find(aba => aba.id === abaAtivaId.value)
})
</script>

<template>
  <div class="editor-conteudo">
    <div v-if="!abaAtual" class="vazio">
      <div class="vazio-mensagem">
        <h2>Bem-vindo ao VS Code</h2>
        <p>Abra um arquivo para começar a editar</p>
      </div>
    </div>
    <div v-else class="conteudo-aba">
      <div class="conteudo-cabecalho">
        <span class="conteudo-titulo">{{ abaAtual.titulo }}</span>
      </div>
      <div class="conteudo-editor">
        <textarea
          v-model="abaAtual.conteudo"
          class="editor-textarea"
          placeholder="Digite seu código aqui..."
          spellcheck="false"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editor-conteudo {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  overflow: hidden;
}

.vazio {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #858585;
}

.vazio-mensagem {
  text-align: center;
}

.vazio-mensagem h2 {
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 12px 0;
  color: #cccccc;
}

.vazio-mensagem p {
  font-size: 14px;
  margin: 0;
}

.conteudo-aba {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.conteudo-cabecalho {
  padding: 8px 16px;
  background-color: #1e1e1e;
  border-bottom: 1px solid #2d2d30;
  color: #cccccc;
  font-size: 12px;
}

.conteudo-titulo {
  font-family: 'Courier New', monospace;
}

.conteudo-editor {
  flex: 1;
  overflow: hidden;
}

.editor-textarea {
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: #1e1e1e;
  border: none;
  color: #d4d4d4;
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  resize: none;
  outline: none;
  overflow: auto;
}

.editor-textarea::placeholder {
  color: #6a6a6a;
}
</style>
