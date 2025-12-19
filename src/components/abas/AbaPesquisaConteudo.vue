<script setup>
import { ref } from 'vue'

const termoPesquisa = ref('')
const resultados = ref([])

const pesquisar = () => {
  if (!termoPesquisa.value) {
    resultados.value = []
    return
  }
  resultados.value = [
    { arquivo: 'Main.vue', linha: 12, texto: 'const ' + termoPesquisa.value },
    { arquivo: 'App.vue', linha: 5, texto: 'import ' + termoPesquisa.value }
  ]
}
</script>

<template>
  <div class="pesquisa">
    <div class="campo-pesquisa">
      <input
        v-model="termoPesquisa"
        @input="pesquisar"
        type="text"
        placeholder="Pesquisar"
        class="input-pesquisa"
      />
    </div>
    <div class="resultados">
      <div v-if="resultados.length === 0" class="sem-resultados">
        {{ termoPesquisa ? 'Nenhum resultado encontrado' : 'Digite para pesquisar' }}
      </div>
      <div v-for="(resultado, indice) in resultados" :key="indice" class="resultado-item">
        <div class="resultado-arquivo">{{ resultado.arquivo }}</div>
        <div class="resultado-linha">
          <span class="numero-linha">{{ resultado.linha }}:</span>
          <span class="texto-linha">{{ resultado.texto }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pesquisa {
  padding: 8px;
}

.campo-pesquisa {
  margin-bottom: 12px;
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

.resultados {
  color: #cccccc;
  font-size: 13px;
}

.sem-resultados {
  padding: 12px;
  color: #858585;
  text-align: center;
}

.resultado-item {
  padding: 8px 12px;
  cursor: pointer;
}

.resultado-item:hover {
  background-color: #2a2d2e;
}

.resultado-arquivo {
  font-weight: 500;
  margin-bottom: 4px;
}

.resultado-linha {
  padding-left: 12px;
  color: #858585;
  font-size: 12px;
}

.numero-linha {
  color: #858585;
  margin-right: 8px;
}

.texto-linha {
  color: #cccccc;
}
</style>
