import { defineStore } from 'pinia'
import axios from 'axios'

const EXTENSOES = {
  JavaScript: 'js',
  TypeScript: 'ts',
  Python: 'py',
  Java: 'java',
  'C++': 'cpp',
  C: 'c',
  'C#': 'cs',
  PHP: 'php',
  Ruby: 'rb',
  Go: 'go',
  Rust: 'rs',
  Swift: 'swift',
  Kotlin: 'kt',
  Dart: 'dart',
  Vue: 'vue',
  HTML: 'html',
  CSS: 'css',
  Shell: 'sh',
  default: 'md'
}

export const useGithubStore = defineStore('github', {
  state: () => ({
    repositorios: [],
    carregando: false,
    carregandoReadme: {},
    erro: null,
    readmes: {}
  }),

  getters: {
    repositoriosComExtensao: (state) => {
      return state.repositorios.map(repo => ({
        ...repo,
        extensao: EXTENSOES[repo.language] || EXTENSOES.default,
        nomeArquivo: `${repo.name}.${EXTENSOES[repo.language] || EXTENSOES.default}`
      }))
    }
  },

  actions: {
    async buscarRepositorios(usuario) {
      this.carregando = true
      this.erro = null
      
      try {
        const resposta = await axios.get(`https://api.github.com/users/${usuario}/repos`, {
          params: { sort: 'updated', per_page: 100 }
        })
        this.repositorios = resposta.data.filter(repo => !repo.private)
      } catch (erro) {
        this.erro = erro.message
        this.repositorios = []
      } finally {
        this.carregando = false
      }
    },

    async buscarReadme(repo) {
      const chave = `${repo.owner.login}/${repo.name}`
      
      if (this.readmes[chave]) {
        return this.readmes[chave]
      }

      this.carregandoReadme[chave] = true

      try {
        const resposta = await axios.get(`https://api.github.com/repos/${chave}/readme`, {
          headers: { Accept: 'application/vnd.github.raw' }
        })
        this.readmes[chave] = resposta.data
        return resposta.data
      } catch (erro) {
        const mensagemPadrao = `# ${repo.name}\n\nRepositório sem README.md`
        this.readmes[chave] = mensagemPadrao
        return mensagemPadrao
      } finally {
        this.carregandoReadme[chave] = false
      }
    }
  }
})
