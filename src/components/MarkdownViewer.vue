<script setup>
import { computed } from 'vue'

const props = defineProps({
  conteudo: {
    type: String,
    required: true
  }
})

const linhas = computed(() => {
  if (!props.conteudo) return []
  return props.conteudo.split('\n')
})

const parseMarkdown = (texto) => {
  const elementos = []
  let i = 0
  
  while (i < linhas.value.length) {
    const linha = linhas.value[i]
    
    if (linha.startsWith('```')) {
      const linguagem = linha.slice(3).trim()
      const codigoLinhas = []
      i++
      
      while (i < linhas.value.length && !linhas.value[i].startsWith('```')) {
        codigoLinhas.push(linhas.value[i])
        i++
      }
      
      elementos.push({ tipo: 'codigo', conteudo: codigoLinhas.join('\n'), linguagem })
      i++
      continue
    }
    
    if (linha.startsWith('# ')) {
      elementos.push({ tipo: 'h1', conteudo: linha.slice(2) })
    } else if (linha.startsWith('## ')) {
      elementos.push({ tipo: 'h2', conteudo: linha.slice(3) })
    } else if (linha.startsWith('### ')) {
      elementos.push({ tipo: 'h3', conteudo: linha.slice(4) })
    } else if (linha.startsWith('#### ')) {
      elementos.push({ tipo: 'h4', conteudo: linha.slice(5) })
    } else if (linha.startsWith('- ') || linha.startsWith('* ')) {
      const itens = [linha.slice(2)]
      i++
      
      while (i < linhas.value.length && (linhas.value[i].startsWith('- ') || linhas.value[i].startsWith('* '))) {
        itens.push(linhas.value[i].slice(2))
        i++
      }
      
      elementos.push({ tipo: 'lista', itens })
      continue
    } else if (linha.trim() === '') {
      elementos.push({ tipo: 'espaco' })
    } else {
      elementos.push({ tipo: 'paragrafo', conteudo: linha })
    }
    
    i++
  }
  
  return elementos
}

const formatarTexto = (texto) => {
  return texto
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="px-1 py-0.5 bg-terciario text-texto-destaque text-xs rounded">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" class="text-borda-destaque hover:underline">$1</a>')
}

const elementosRenderizados = computed(() => parseMarkdown())
</script>

<template>
  <div class="p-6 text-texto-principal leading-relaxed max-w-4xl">
    <div v-for="(elemento, indice) in elementosRenderizados" :key="indice">
      <h1 v-if="elemento.tipo === 'h1'" class="text-3xl font-bold mb-4 text-texto-titulo border-b border-borda-secundaria pb-2" v-html="formatarTexto(elemento.conteudo)"></h1>
      <h2 v-else-if="elemento.tipo === 'h2'" class="text-2xl font-bold mb-3 mt-6 text-texto-titulo border-b border-borda-secundaria pb-2" v-html="formatarTexto(elemento.conteudo)"></h2>
      <h3 v-else-if="elemento.tipo === 'h3'" class="text-xl font-bold mb-2 mt-5 text-texto-titulo" v-html="formatarTexto(elemento.conteudo)"></h3>
      <h4 v-else-if="elemento.tipo === 'h4'" class="text-lg font-bold mb-2 mt-4 text-texto-titulo" v-html="formatarTexto(elemento.conteudo)"></h4>
      <p v-else-if="elemento.tipo === 'paragrafo'" class="mb-4 text-texto-principal" v-html="formatarTexto(elemento.conteudo)"></p>
      <ul v-else-if="elemento.tipo === 'lista'" class="mb-4 ml-6 list-disc text-texto-principal space-y-1">
        <li v-for="(item, idx) in elemento.itens" :key="idx" v-html="formatarTexto(item)"></li>
      </ul>
      <pre v-else-if="elemento.tipo === 'codigo'" class="mb-4 p-4 bg-terciario border border-borda-secundaria rounded overflow-x-auto"><code class="text-sm text-texto-principal font-mono">{{ elemento.conteudo }}</code></pre>
      <div v-else-if="elemento.tipo === 'espaco'" class="h-2"></div>
    </div>
  </div>
</template>
