<script setup>
import { ref } from 'vue'

const extensoes = ref([
  {
    nome: 'Vue Language Features',
    autor: 'Vue',
    descricao: 'Suporte oficial do Vue para VS Code',
    instalada: true
  },
  {
    nome: 'ESLint',
    autor: 'Microsoft',
    descricao: 'Integração do ESLint',
    instalada: true
  },
  {
    nome: 'Prettier',
    autor: 'Prettier',
    descricao: 'Formatador de código',
    instalada: false
  }
])

const alternarInstalacao = (indice) => {
  extensoes.value[indice].instalada = !extensoes.value[indice].instalada
}
</script>

<template>
  <div class="extensoes">
    <div class="campo-pesquisa">
      <input type="text" placeholder="Pesquisar extensões" class="input-pesquisa" />
    </div>
    <div class="lista-extensoes">
      <div v-for="(ext, indice) in extensoes" :key="indice" class="extensao-item">
        <div class="extensao-info">
          <div class="extensao-nome">{{ ext.nome }}</div>
          <div class="extensao-autor">{{ ext.autor }}</div>
          <div class="extensao-descricao">{{ ext.descricao }}</div>
        </div>
        <button @click="alternarInstalacao(indice)" class="botao-instalar">
          {{ ext.instalada ? 'Desinstalar' : 'Instalar' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.extensoes {
  padding: 12px;
  color: #cccccc;
}

.campo-pesquisa {
  margin-bottom: 16px;
}

.input-pesquisa {
  width: 100%;
  padding: 8px 12px;
  background-color: #3c3c3c;
  border: 1px solid #3c3c3c;
  color: #cccccc;
  font-size: 13px;
  outline: none;
}

.input-pesquisa:focus {
  border-color: #007acc;
}

.lista-extensoes {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.extensao-item {
  padding: 12px;
  background-color: #2d2d30;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.extensao-info {
  flex: 1;
}

.extensao-nome {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  color: #e4e4e4;
}

.extensao-autor {
  font-size: 12px;
  color: #858585;
  margin-bottom: 6px;
}

.extensao-descricao {
  font-size: 12px;
  color: #cccccc;
  line-height: 1.4;
}

.botao-instalar {
  padding: 6px 16px;
  background-color: #0e639c;
  border: none;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 2px;
  white-space: nowrap;
  transition: background-color 0.2s;
}

.botao-instalar:hover {
  background-color: #1177bb;
}
</style>
