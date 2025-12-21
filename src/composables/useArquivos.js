import { ref, watch } from 'vue'
import { useGithubStore } from '@/stores/github'

let proximoId = 1

const itemSelecionado = ref(null)
const ocultarArquivoAtivo = ref(false)
const estruturaArquivos = ref([
  {
    id: proximoId++,
    nome: 'Curriculo.md',
    tipo: 'arquivo',
    caminho: 'Profissional/Curriculo.md',
    conteudo: ''
  },
  {
    id: proximoId++,
    nome: 'Profissional',
    tipo: 'pasta',
    aberta: true,
    caminho: 'Profissional',
    filhos: [
      {
        id: proximoId++,
        nome: 'GitHub',
        tipo: 'pasta',
        aberta: true,
        caminho: 'Profissional/GitHub',
        filhos: []
      }
    ]
  },
  {
    id: proximoId++,
    nome: 'src',
    tipo: 'pasta',
    aberta: false,
    caminho: 'src',
    filhos: [
      {
        id: proximoId++,
        nome: 'App.vue',
        tipo: 'arquivo',
        caminho: 'src/App.vue',
        conteudo: '<template>\n  <div id="app">\n    <h1>App Vue</h1>\n  </div>\n</template>'
      },
      {
        id: proximoId++,
        nome: 'main.js',
        tipo: 'arquivo',
        caminho: 'src/main.js',
        conteudo: 'import { createApp } from "vue"\nimport App from "./App.vue"\n\ncreateApp(App).mount("#app")'
      },
      {
        id: proximoId++,
        nome: 'components',
        tipo: 'pasta',
        aberta: false,
        caminho: 'src/components',
        filhos: [
          {
            id: proximoId++,
            nome: 'NavBar.vue',
            tipo: 'arquivo',
            caminho: 'src/components/NavBar.vue',
            conteudo: '<template>\n  <nav>NavBar</nav>\n</template>'
          },
          {
            id: proximoId++,
            nome: 'Main.vue',
            tipo: 'arquivo',
            caminho: 'src/components/Main.vue',
            conteudo: '<template>\n  <main>Main</main>\n</template>'
          },
          {
            id: proximoId++,
            nome: 'layout',
            tipo: 'pasta',
            aberta: false,
            caminho: 'src/components/layout',
            filhos: [
              {
                id: proximoId++,
                nome: 'Header.vue',
                tipo: 'arquivo',
                caminho: 'src/components/layout/Header.vue',
                conteudo: '<template>\n  <header>Header</header>\n</template>'
              },
              {
                id: proximoId++,
                nome: 'Footer.vue',
                tipo: 'arquivo',
                caminho: 'src/components/layout/Footer.vue',
                conteudo: '<template>\n  <footer>Footer</footer>\n</template>'
              }
            ]
          }
        ]
      },
      {
        id: proximoId++,
        nome: 'composables',
        tipo: 'pasta',
        aberta: false,
        caminho: 'src/composables',
        filhos: [
          {
            id: proximoId++,
            nome: 'useAbas.js',
            tipo: 'arquivo',
            caminho: 'src/composables/useAbas.js',
            conteudo: 'export function useAbas() {\n  // implementação\n}'
          },
          {
            id: proximoId++,
            nome: 'TesteDeNomeGrandeDeArquivo.js',
            tipo: 'arquivo',
            caminho: 'src/composables/useEditorAbas.js',
            conteudo: 'export function useEditorAbas() {\n  // implementação\n}'
          }
        ]
      }
    ]
  },
  {
    id: proximoId++,
    nome: 'public',
    tipo: 'pasta',
    aberta: false,
    caminho: 'public',
    filhos: [
      {
        id: proximoId++,
        nome: 'index.html',
        tipo: 'arquivo',
        caminho: 'public/index.html',
        conteudo: '<!DOCTYPE html>\n<html>\n<head>\n  <title>App</title>\n</head>\n<body>\n  <div id="app"></div>\n</body>\n</html>'
      }
    ]
  },
  {
    id: proximoId++,
    nome: 'package.json',
    tipo: 'arquivo',
    caminho: 'package.json',
    conteudo: '{\n  "name": "vscode2",\n  "version": "1.0.0"\n}'
  },
  {
    id: proximoId++,
    nome: 'README.md',
    tipo: 'arquivo',
    caminho: 'README.md',
    conteudo: '# VS Code Clone\n\nUma réplica do VS Code usando Vue 3'
  }
])

function encontrarItemPorCaminho(caminho, itens = estruturaArquivos.value) {
  for (const item of itens) {
    if (item.caminho === caminho) return item
    if (item.tipo === 'pasta' && item.filhos) {
      const encontrado = encontrarItemPorCaminho(caminho, item.filhos)
      if (encontrado) return encontrado
    }
  }
  return null
}

function alternarPasta(item) {
  const itemEncontrado = encontrarItemPorCaminho(item.caminho)
  if (itemEncontrado && itemEncontrado.tipo === 'pasta') {
    itemEncontrado.aberta = !itemEncontrado.aberta
  }
}

function selecionarItem(item) {
  itemSelecionado.value = item
  ocultarArquivoAtivo.value = false
}

function desselecionarItem() {
  itemSelecionado.value = null
  ocultarArquivoAtivo.value = true
}

function criarNovoArquivo() {
  let nomePadrao = 'novo-arquivo.txt'
  const nomeArquivo = prompt('Nome do arquivo:', nomePadrao)
  
  if (!nomeArquivo || !nomeArquivo.trim()) return
  
  const novoArquivo = {
    id: proximoId++,
    nome: nomeArquivo,
    tipo: 'arquivo',
    caminho: '',
    conteudo: ''
  }
  
  // Se tiver um item selecionado que seja pasta, adiciona dentro dela
  if (itemSelecionado.value && itemSelecionado.value.tipo === 'pasta') {
    const pastaDestino = encontrarItemPorCaminho(itemSelecionado.value.caminho)
    if (pastaDestino) {
      novoArquivo.caminho = `${pastaDestino.caminho}/${nomeArquivo}`
      if (!pastaDestino.filhos) pastaDestino.filhos = []
      pastaDestino.filhos.push(novoArquivo)
      pastaDestino.aberta = true
    }
  } else {
    // Adiciona na raiz
    novoArquivo.caminho = nomeArquivo
    estruturaArquivos.value.push(novoArquivo)
  }
  
  return novoArquivo
}

function criarNovaPasta() {
  let nomePadrao = 'nova-pasta'
  const nomePasta = prompt('Nome da pasta:', nomePadrao)
  
  if (!nomePasta || !nomePasta.trim()) return
  
  const novaPasta = {
    id: proximoId++,
    nome: nomePasta,
    tipo: 'pasta',
    aberta: false,
    caminho: '',
    filhos: []
  }
  
  // Se tiver um item selecionado que seja pasta, adiciona dentro dela
  if (itemSelecionado.value && itemSelecionado.value.tipo === 'pasta') {
    const pastaDestino = encontrarItemPorCaminho(itemSelecionado.value.caminho)
    if (pastaDestino) {
      novaPasta.caminho = `${pastaDestino.caminho}/${nomePasta}`
      if (!pastaDestino.filhos) pastaDestino.filhos = []
      pastaDestino.filhos.push(novaPasta)
      pastaDestino.aberta = true
    }
  } else {
    // Adiciona na raiz
    novaPasta.caminho = nomePasta
    estruturaArquivos.value.push(novaPasta)
  }
  
  return novaPasta
}

function atualizarRepositorios() {
  const githubStore = useGithubStore()
  const pastaGithub = encontrarItemPorCaminho('Profissional/GitHub')
  
  if (!pastaGithub) return
  
  pastaGithub.filhos = githubStore.repositoriosComExtensao.map(repo => ({
    id: proximoId++,
    nome: repo.nomeArquivo,
    tipo: 'arquivo',
    caminho: `Profissional/GitHub/${repo.nomeArquivo}`,
    isGithubRepo: true,
    repoData: repo
  }))
}

function recolherTodasPastas() {
  const recolher = (itens) => {
    itens.forEach(item => {
      if (item.tipo === 'pasta') {
        item.aberta = false
        if (item.filhos && item.filhos.length > 0) recolher(item.filhos)
      }
    })
  }
  
  recolher(estruturaArquivos.value)
}

export function useArquivos() {
  const githubStore = useGithubStore()
  
  githubStore.buscarRepositorios('meunik')
  
  watch(() => githubStore.repositorios, atualizarRepositorios, { immediate: true })
  
  return {
    ocultarArquivoAtivo,
    estruturaArquivos,
    itemSelecionado,
    encontrarItemPorCaminho,
    alternarPasta,
    selecionarItem,
    desselecionarItem,
    criarNovoArquivo,
    criarNovaPasta,
    recolherTodasPastas
  }
}
