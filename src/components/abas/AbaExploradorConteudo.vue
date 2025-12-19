<script setup>
import { useArquivos } from '@/composables/useArquivos'
import { useEditorAbas } from '@/composables/useEditorAbas'
import ItemArvore from './ItemArvore.vue'

const { estruturaArquivos, alternarPasta } = useArquivos()
const { abas, abrirArquivo, ativarAba, fecharAba } = useEditorAbas()

const handleAbrirArquivo = (item) => {
  abrirArquivo(item.caminho, item.nome, item.conteudo || '')
}

const handleFecharAba = (aba) => {
  fecharAba(aba.id)
}

const handleAtivarAba = (aba) => {
  ativarAba(aba.id)
}
</script>

<template>
  <div class="explorador">
    <div v-if="abas.length > 0" class="secao">
      <div class="secao-titulo">EDITORES ABERTOS</div>
      <div class="editores-abertos">
        <div
          v-for="aba in abas"
          :key="aba.id"
          class="editor-item"
          @click="handleAtivarAba(aba)"
        >
          <span class="icone-arquivo">📄</span>
          <span class="nome-arquivo">{{ aba.titulo }}</span>
          <button class="botao-fechar" @click.stop="handleFecharAba(aba)">×</button>
        </div>
      </div>
    </div>
    <div class="secao">
      <div class="secao-titulo">VSCODE2</div>
      <div class="arvore">
        <ItemArvore
          v-for="item in estruturaArquivos"
          :key="item.id"
          :item="item"
          :nivel="0"
          @alternarPasta="alternarPasta"
          @abrirArquivo="handleAbrirArquivo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.explorador {
  color: #cccccc;
  font-size: 13px;
  height: 100%;
  overflow-y: auto;
}

.secao {
  margin-bottom: 8px;
}

.secao-titulo {
  padding: 8px 20px 4px;
  font-size: 11px;
  font-weight: 600;
  color: #858585;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.editores-abertos {
  padding: 4px 0;
}

.editor-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 20px;
  cursor: pointer;
  user-select: none;
}

.editor-item:hover {
  background-color: #2a2d2e;
}

.icone-arquivo {
  font-size: 12px;
  flex-shrink: 0;
}

.nome-arquivo {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
}

.botao-fechar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: none;
  border: none;
  color: #858585;
  font-size: 18px;
  cursor: pointer;
  border-radius: 3px;
  padding: 0;
  line-height: 1;
  opacity: 0;
  transition: opacity 0.2s;
}

.editor-item:hover .botao-fechar {
  opacity: 1;
}

.botao-fechar:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #cccccc;
}

.arvore {
  margin-top: 4px;
}
</style>
