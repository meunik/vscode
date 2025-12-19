<script setup>
import { ref } from 'vue'

const alteracoes = ref([
  { tipo: 'M', arquivo: 'src/components/Main.vue' },
  { tipo: 'A', arquivo: 'src/components/PainelLateral.vue' },
  { tipo: 'M', arquivo: 'src/composables/useAbas.js' }
])

const mensagemCommit = ref('')

const commit = () => {
  if (mensagemCommit.value.trim()) {
    alteracoes.value = []
    mensagemCommit.value = ''
  }
}
</script>

<template>
  <div class="git">
    <div class="secao-commit">
      <textarea
        v-model="mensagemCommit"
        placeholder="Mensagem do commit"
        class="input-mensagem"
        rows="3"
      ></textarea>
      <button @click="commit" class="botao-commit" :disabled="!mensagemCommit.trim()">
        Confirmar
      </button>
    </div>
    <div class="secao-alteracoes">
      <div class="secao-titulo">ALTERAÇÕES</div>
      <div v-if="alteracoes.length === 0" class="sem-alteracoes">
        Nenhuma alteração
      </div>
      <div v-for="(item, indice) in alteracoes" :key="indice" class="alteracao-item">
        <span class="tipo-alteracao" :class="'tipo-' + item.tipo">{{ item.tipo }}</span>
        <span class="arquivo-alteracao">{{ item.arquivo }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.git {
  padding: 12px;
  color: #cccccc;
}

.secao-commit {
  margin-bottom: 20px;
}

.input-mensagem {
  width: 100%;
  padding: 8px 12px;
  background-color: #3c3c3c;
  border: 1px solid #3c3c3c;
  color: #cccccc;
  font-size: 13px;
  font-family: inherit;
  resize: vertical;
  outline: none;
  margin-bottom: 8px;
}

.input-mensagem:focus {
  border-color: #007acc;
}

.botao-commit {
  width: 100%;
  padding: 8px 12px;
  background-color: #007acc;
  border: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.botao-commit:hover:not(:disabled) {
  background-color: #005a9e;
}

.botao-commit:disabled {
  background-color: #3c3c3c;
  color: #858585;
  cursor: not-allowed;
}

.secao-alteracoes {
  margin-top: 16px;
}

.secao-titulo {
  font-size: 11px;
  font-weight: 600;
  color: #858585;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sem-alteracoes {
  padding: 12px;
  color: #858585;
  font-size: 13px;
  text-align: center;
}

.alteracao-item {
  padding: 6px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 13px;
}

.alteracao-item:hover {
  background-color: #2a2d2e;
}

.tipo-alteracao {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  border-radius: 2px;
}

.tipo-M {
  background-color: #1e7fcc;
  color: #ffffff;
}

.tipo-A {
  background-color: #2ea043;
  color: #ffffff;
}

.tipo-D {
  background-color: #d73a49;
  color: #ffffff;
}
</style>
