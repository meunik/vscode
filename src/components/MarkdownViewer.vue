<script setup>
import { computed, onMounted, nextTick, watch } from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import java from 'highlight.js/lib/languages/java'
import json from 'highlight.js/lib/languages/json'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import bash from 'highlight.js/lib/languages/bash'
import sql from 'highlight.js/lib/languages/sql'
import markdown from 'highlight.js/lib/languages/markdown'
import php from 'highlight.js/lib/languages/php'
import go from 'highlight.js/lib/languages/go'
import rust from 'highlight.js/lib/languages/rust'
import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import csharp from 'highlight.js/lib/languages/csharp'
import ruby from 'highlight.js/lib/languages/ruby'
import swift from 'highlight.js/lib/languages/swift'
import kotlin from 'highlight.js/lib/languages/kotlin'
import scala from 'highlight.js/lib/languages/scala'
import r from 'highlight.js/lib/languages/r'
import perl from 'highlight.js/lib/languages/perl'
import dart from 'highlight.js/lib/languages/dart'
import yaml from 'highlight.js/lib/languages/yaml'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('ts', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('py', python)
hljs.registerLanguage('java', java)
hljs.registerLanguage('json', json)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('vue', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('scss', css)
hljs.registerLanguage('sass', css)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', bash)
hljs.registerLanguage('sh', bash)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('md', markdown)
hljs.registerLanguage('php', php)
hljs.registerLanguage('go', go)
hljs.registerLanguage('rust', rust)
hljs.registerLanguage('rs', rust)
hljs.registerLanguage('c', c)
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('c++', cpp)
hljs.registerLanguage('csharp', csharp)
hljs.registerLanguage('cs', csharp)
hljs.registerLanguage('ruby', ruby)
hljs.registerLanguage('rb', ruby)
hljs.registerLanguage('swift', swift)
hljs.registerLanguage('kotlin', kotlin)
hljs.registerLanguage('kt', kotlin)
hljs.registerLanguage('scala', scala)
hljs.registerLanguage('r', r)
hljs.registerLanguage('perl', perl)
hljs.registerLanguage('pl', perl)
hljs.registerLanguage('dart', dart)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('yml', yaml)

const props = defineProps({
  conteudo: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: 'text-texto-principal'
  }
})

const linhas = computed(() => {
  if (!props.conteudo) return []
  return props.conteudo.split('\n')
})

const aplicarHighlight = () => {
  nextTick(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      if (!block.dataset.highlighted) {
        hljs.highlightElement(block)
        block.dataset.highlighted = 'yes'
      }
    })
  })
}

watch(() => props.conteudo, () => aplicarHighlight())
onMounted(() => aplicarHighlight())

// Helpers para parsing de markdown
const TAGS_BLOCO_HTML = ['<div', '<table', '<section', '<article', '<aside', '<header', '<footer', '<nav', '<main', '<figure', '<details', '<summary']

const ehBlocoHtml = (linha) => TAGS_BLOCO_HTML.some(tag => linha.trim().startsWith(tag))

const extrairBlocoHtml = (indiceInicial) => {
  const linha = linhas.value[indiceInicial]
  const tagMatch = linha.match(/<(\w+)/)
  const tagName = tagMatch?.[1]
  
  if (!tagName) return null
  
  const htmlLinhas = [linha]
  let i = indiceInicial + 1
  
  while (i < linhas.value.length && !linhas.value[i].includes(`</${tagName}>`)) {
    htmlLinhas.push(linhas.value[i])
    i++
  }
  
  if (i < linhas.value.length) {
    htmlLinhas.push(linhas.value[i])
  }
  
  // Processar markdown dentro do bloco HTML
  const conteudoProcessado = htmlLinhas.map((l, idx) => {
    // Manter tags HTML abertas e fechadas
    if (idx === 0 || idx === htmlLinhas.length - 1 || l.trim().startsWith('<') && l.trim().endsWith('>')) {
      return l
    }
    // Processar markdown nas outras linhas
    return formatarTexto(l)
  }).join('\n')
  
  return { conteudo: conteudoProcessado, proximoIndice: i + 1 }
}

const extrairBlocoCodigo = (indiceInicial) => {
  const linha = linhas.value[indiceInicial]
  const linguagem = linha.slice(3).trim() || 'plaintext'
  const codigoLinhas = []
  let i = indiceInicial + 1
  
  while (i < linhas.value.length && !linhas.value[i].startsWith('```')) {
    codigoLinhas.push(linhas.value[i])
    i++
  }
  
  return {
    linguagem,
    conteudo: codigoLinhas.join('\n'),
    proximoIndice: i + 1
  }
}

const extrairLista = (indiceInicial) => {
  const itens = []
  let i = indiceInicial
  
  const processarItem = (linha) => {
    const indentacao = linha.search(/\S/)
    const conteudo = linha.trim().slice(2) // Remove '- ' ou '* '
    return { indentacao, conteudo }
  }
  
  while (i < linhas.value.length) {
    const linha = linhas.value[i]
    if (!linha.match(/^\s*[-*]\s/)) break
    
    const item = processarItem(linha)
    itens.push(item)
    i++
  }
  
  // Converter lista plana em estrutura hierárquica
  const construirHierarquia = (items, indiceBase = 0) => {
    const resultado = []
    let idx = 0
    
    while (idx < items.length) {
      const itemAtual = items[idx]
      
      if (itemAtual.indentacao === indiceBase) {
        // Item no nível atual
        const subItens = []
        let proximoIdx = idx + 1
        
        // Procurar subitens (com maior indentação)
        while (proximoIdx < items.length && items[proximoIdx].indentacao > indiceBase) {
          proximoIdx++
        }
        
        // Se houver subitens, processar recursivamente
        if (proximoIdx > idx + 1) {
          const subLista = items.slice(idx + 1, proximoIdx)
          const menorIndentacao = Math.min(...subLista.map(it => it.indentacao))
          subItens.push(...construirHierarquia(subLista, menorIndentacao))
          idx = proximoIdx
        } else {
          idx++
        }
        
        resultado.push({
          conteudo: itemAtual.conteudo,
          subItens
        })
      } else {
        idx++
      }
    }
    
    return resultado
  }
  
  const itensHierarquicos = construirHierarquia(itens, Math.min(...itens.map(it => it.indentacao)))
  
  return { itens: itensHierarquicos, proximoIndice: i }
}

const extrairBadgesInline = (indiceInicial) => {
  const badges = [linhas.value[indiceInicial]]
  let i = indiceInicial + 1
  
  // Continuar enquanto a linha for uma imagem markdown
  while (i < linhas.value.length && linhas.value[i].match(/^!\[.*\]\(.*\)$/)) {
    badges.push(linhas.value[i])
    i++
  }
  
  return { badges, proximoIndice: i }
}

const parseMarkdown = () => {
  const elementos = []
  let i = 0
  
  while (i < linhas.value.length) {
    const linha = linhas.value[i]
    
    // Blocos HTML com atributos (processar antes para manter estilos)
    if (ehBlocoHtml(linha) && !linha.includes('</')) {
      const resultado = extrairBlocoHtml(i)
      if (resultado) {
        elementos.push({ tipo: 'html', conteudo: resultado.conteudo })
        i = resultado.proximoIndice
        continue
      }
    }
    
    // Blocos de código
    if (linha.startsWith('```')) {
      const resultado = extrairBlocoCodigo(i)
      elementos.push({ tipo: 'codigo', conteudo: resultado.conteudo, linguagem: resultado.linguagem })
      i = resultado.proximoIndice
      continue
    }
    
    // Linha horizontal (## sozinho ou ---, ***, ___)
    if (linha.trim() === '##' || linha.trim() === '---' || linha.trim() === '***' || linha.trim() === '___') {
      elementos.push({ tipo: 'linha' })
    }
    // Títulos
    else if (linha.startsWith('#### ')) {
      elementos.push({ tipo: 'h4', conteudo: linha.slice(5) })
    } else if (linha.startsWith('### ')) {
      elementos.push({ tipo: 'h3', conteudo: linha.slice(4) })
    } else if (linha.startsWith('## ')) {
      elementos.push({ tipo: 'h2', conteudo: linha.slice(3) })
    } else if (linha.startsWith('# ')) {
      elementos.push({ tipo: 'h1', conteudo: linha.slice(2) })
    }
    // Listas
    else if (linha.startsWith('- ') || linha.startsWith('* ')) {
      const resultado = extrairLista(i)
      elementos.push({ tipo: 'lista', itens: resultado.itens })
      i = resultado.proximoIndice
      continue
    }
    // Badges inline (múltiplas imagens consecutivas)
    else if (linha.match(/^!\[.*\]\(.*\)$/)) {
      const resultado = extrairBadgesInline(i)
      elementos.push({ tipo: 'badges', badges: resultado.badges })
      i = resultado.proximoIndice
      continue
    }
    // Linhas vazias
    else if (linha.trim() === '') {
      elementos.push({ tipo: 'espaco' })
    }
    // Parágrafos
    else {
      elementos.push({ tipo: 'paragrafo', conteudo: linha })
    }
    
    i++
  }
  
  return elementos
}

const formatarTexto = (texto) => {
  // Se a linha é uma tag HTML pura (sem markdown), retornar como está
  if (texto.trim().match(/^<[^>]+>$/) || texto.trim().match(/^<\/[^>]+>$/)) {
    return texto
  }
  
  let resultado = texto
  
  // Processar títulos markdown (quando dentro de blocos HTML)
  if (texto.startsWith('# ')) {
    const nivel = texto.match(/^#+/)[0].length
    const conteudo = texto.replace(/^#+\s*/, '')
    const classes = {
      1: 'text-3xl font-bold mb-4 text-texto-titulo border-b border-borda-secundaria pb-2',
      2: 'text-2xl font-bold mb-3 mt-6 text-texto-titulo border-b border-borda-secundaria pb-2',
      3: 'text-xl font-bold mb-2 mt-5 text-texto-titulo',
      4: 'text-lg font-bold mb-2 mt-4 text-texto-titulo'
    }
    resultado = `<h${nivel} class="${classes[nivel] || classes[4]}">${conteudo}</h${nivel}>`
  } else {
    resultado = texto
      // Badges com link: [![texto](imagem)](link)
      .replace(/\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g, '<a href="$3" target="_blank" rel="noopener noreferrer" class="inline-block"><img src="$2" alt="$1" class="inline-block h-5" style="display: inline-block; vertical-align: middle;" /></a>')
      // Imagens: ![alt](url)
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="inline-block max-w-full" style="display: inline-block; vertical-align: middle;" />')
      // Links: [texto](url)
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-borda-destaque hover:underline">$1</a>')
      // Bold: **texto**
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // Italic: *texto*
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Code inline: `codigo`
      .replace(/`(.+?)`/g, '<code class="px-1 py-0.5 bg-terciario text-texto-destaque text-xs rounded">$1</code>')
  }
  
  return resultado
}

const elementosRenderizados = computed(() => parseMarkdown())
</script>

<template>
  <div :class="[props.class]">
    <template v-for="(elemento, indice) in elementosRenderizados" :key="indice">
      <h1 v-if="elemento.tipo === 'h1'" class="text-3xl font-bold mb-4 text-texto-titulo border-b border-borda-secundaria pb-2" v-html="formatarTexto(elemento.conteudo)"></h1>
      <h2 v-else-if="elemento.tipo === 'h2'" class="text-2xl font-bold mb-3 mt-6 text-texto-titulo border-b border-borda-secundaria pb-2" v-html="formatarTexto(elemento.conteudo)"></h2>
      <h3 v-else-if="elemento.tipo === 'h3'" class="text-xl font-bold mb-2 mt-5 text-texto-titulo" v-html="formatarTexto(elemento.conteudo)"></h3>
      <h4 v-else-if="elemento.tipo === 'h4'" class="text-lg font-bold mb-2 mt-4 text-texto-titulo" v-html="formatarTexto(elemento.conteudo)"></h4>
      <p v-else-if="elemento.tipo === 'paragrafo'" class="mb-2" v-html="formatarTexto(elemento.conteudo)"></p>
      <ul v-else-if="elemento.tipo === 'lista'" :class="['mb-4', 'ml-6', 'list-disc', 'space-y-1']">
        <template v-for="(item, idx) in elemento.itens" :key="idx">
          <li>
            <span v-html="formatarTexto(item.conteudo || item)"></span>
            <ul v-if="item.subItens && item.subItens.length > 0" class="ml-6 list-disc space-y-1 mt-1">
              <template v-for="(subItem, subIdx) in item.subItens" :key="subIdx">
                <li>
                  <span v-html="formatarTexto(subItem.conteudo || subItem)"></span>
                  <ul v-if="subItem.subItens && subItem.subItens.length > 0" class="ml-6 list-disc space-y-1 mt-1">
                    <li v-for="(subSubItem, subSubIdx) in subItem.subItens" :key="subSubIdx">
                      <span v-html="formatarTexto(subSubItem.conteudo || subSubItem)"></span>
                    </li>
                  </ul>
                </li>
              </template>
            </ul>
          </li>
        </template>
      </ul>
      <div v-else-if="elemento.tipo === 'badges'" class="mb-4 flex items-center gap-2 flex-wrap">
        <span v-for="(badge, idx) in elemento.badges" :key="idx" v-html="formatarTexto(badge)"></span>
      </div>
      <pre v-else-if="elemento.tipo === 'codigo'" class="mb-4 bg-[#151b23] rounded-md overflow-x-auto p-4 sm-scrollbar"><code :class="`language-${elemento.linguagem}`" class="text-sm font-mono">{{ elemento.conteudo }}</code></pre>
      <div v-else-if="elemento.tipo === 'html'" class="mb-4" v-html="elemento.conteudo"></div>
      <hr v-else-if="elemento.tipo === 'linha'" class="my-6 border-t border-borda-secundaria" />
      <div v-else-if="elemento.tipo === 'espaco'" class="h-2"></div>
    </template>
  </div>
</template>

<style>
/* Monokai Pro Theme - https://monokai.pro/ */
.hljs {
  color: #fcfcfa;
  background: #151b23;
}

/* Estilos para imagens e badges */
img {
  max-width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: middle;
}

/* Estilos específicos para badges (altura fixa) */
.inline-block.h-5 {
  height: 1.25rem;
  width: auto;
}

a.inline-block {
  text-decoration: none;
  transition: opacity 0.2s;
}

a.inline-block:hover {
  opacity: 0.8;
}

.hljs-comment,
.hljs-quote {
  color: #727072;
  font-style: italic;
}

.hljs-variable,
.hljs-template-variable,
.hljs-attribute,
.hljs-tag,
.hljs-regexp,
.hljs-link,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
  color: #ff6188;
}

.hljs-number,
.hljs-meta,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params {
  color: #ab9df2;
}

.hljs-string,
.hljs-symbol,
.hljs-bullet {
  color: #ffd866;
}

.hljs-title,
.hljs-section {
  color: #78dce8;
}

.hljs-keyword,
.hljs-selector-tag {
  color: #ff6188;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-function .hljs-title,
.hljs-function .hljs-keyword {
  color: #a9dc76;
}

.hljs-class .hljs-title {
  color: #78dce8;
}

.hljs-attr {
  color: #a9dc76;
}

.hljs-addition {
  color: #a9dc76;
  background-color: rgba(169, 220, 118, 0.1);
}

.hljs-deletion {
  color: #ff6188;
  background-color: rgba(255, 97, 136, 0.1);
}
</style>
