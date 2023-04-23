import axios from 'axios';
import { markdown } from '@/utils/markdown.js';
import store from '@/store/store';
import { camelCase } from '@/utils/lodash.js';

export let Model = {
  computed: {
    carregando: {
      get() {
        return this.$store.getters['carregando']
      },
      set(value) {
        this.$store.commit('carregando', value)
      }
    },
    perfil: {
      get() {
        return this.$store.getters['Git/perfil']
      },
      set(value) {
        this.$store.commit('Git/perfil', value)
      }
    },
    contributions: {
      get() {
        return this.$store.getters['Git/contributions']
      },
      set(value) {
        this.$store.commit('Git/contributions', value)
      }
    },
    repositorios: {
      get() {
        return this.$store.getters['Git/repositorios']
      },
      set(value) {
        this.$store.commit('Git/repositorios', value)
      }
    },
    navegacaoWidth: {
      get() {
        return this.$store.getters['navegacaoWidth']
      },
      set(value) {
        this.$store.commit('navegacaoWidth', value)
      }
    },
    contribTamanho: {
      get() {
        return this.$store.getters['contribTamanho']
      },
      set(value) {
        this.$store.commit('contribTamanho', value)
      }
    },
    abas: {
      get() {
        return this.$store.getters['abas']
      },
      set(value) {
        this.$store.commit('abas', value)
      }
    },
    abaIndex: {
      get() {
        return this.$store.getters['abaIndex']
      },
      set(value) {
        this.$store.commit('abaIndex', value)
      }
    },
    abaControlador: {
      get() {
        return this.$store.getters['abaControlador']
      },
      set(value) {
        this.$store.commit('abaControlador', value)
      }
    },
    abaAbertaKey: {
      get() {
        return this.$store.getters['abaAbertaKey']
      },
      set(value) {
        this.$store.commit('abaAbertaKey', value)
      }
    },
    readme: {
      get() {
        return this.$store.getters['Git/readme']
      },
      set(value) {
        this.$store.commit('Git/readme', value)
      }
    },
    readmePerfil: {
      get() {
        return this.$store.getters['Git/readmePerfil']
      },
      set(value) {
        this.$store.commit('Git/readmePerfil', value)
      }
    },
    extensoes: {
      get() {
        return this.$store.getters['VisualStudio/extensoes']
      },
      set(value) {
        this.$store.commit('VisualStudio/extensoes', value)
      }
    },
    setup: {
      get() {
        return this.$store.getters['VisualStudio/setup']
      },
      set(value) {
        this.$store.commit('VisualStudio/setup', value)
      }
    },
  },
  methods: {
    async novaAba(tipoAba, complemento) {
      this.carregando = true;
      esconderMenu();
      
      let repetido = false;
      let readme = null;

      let nome = null;
      let linguagem = null;
      let tipo = null;
      let icone = null;
      let img = null;
      let conteudo = null;
      let componente = null;

      switch (tipoAba) {
        case 'explorador': 
          readme = await readmeGithub(complemento.name);
          nome = complemento.name;
          linguagem = complemento.language;
          tipo = 'explorador';
          icone = 'github';
          conteudo = markdown(readme);
          break;

        case 'github': 
          readme = await readmeGithub(complemento.name);
          nome = complemento.name;
          linguagem = complemento.language;
          tipo = 'github';
          icone = 'github';
          conteudo = markdown(readme);
          break;

        case 'perfil': 
          nome = 'Perfil';
          tipo = 'explorador';
          icone = 'github';
          componente = 'perfil';
          break;

        case 'curriculo': 
          nome = 'Currículo';
          tipo = 'explorador';
          icone = 'github';
          componente = 'perfil';
          break;

        case 'extensoes':
          let content = await readmeExtensoes(complemento.versions[0].files);
          nome = complemento.displayName;
          tipo = 'extensoes';
          icone = 'extensoes';
          conteudo = markdown(content);
          break;

        case 'setup': 
          nome = 'Setup';
          tipo = 'setup';
          icone = 'monitor';
          componente = 'setup';
          break;

        case 'fotos': 
          nome = 'Fotos';
          tipo = 'fotos';
          icone = 'camera';
          componente = 'fotos';
          break;

        case 'teste': 
          nome = 'teste';
          tipo = 'teste';
          icone = 'circulo';
          componente = 'teste';
          break;
      
        default: break;
      }

      let nomeCamelCase = camelCase(nome);
      repetido = (this.abas[nomeCamelCase])?true:false;

      this.abas = {
        ...this.abas,
        [nomeCamelCase]: {
          nome: nome,
          linguagem: linguagem,
          tipoAba: tipoAba,
          tipo: tipo,
          icone: icone,
          img: img,
          conteudo: conteudo,
          componente: componente,
        },
      };

      const arrayKeys = Object.keys(this.abas);
      const key = parseInt(this.getKeyByValue(arrayKeys, nomeCamelCase));
      this.abaIndex = key;
      if (repetido) this.abaControlador = key;
      localStorage.abas = JSON.stringify(this.abas);
      // console.log(this.abas);
      // console.log(JSON.parse(JSON.stringify(this.abas)));
      this.carregando = false;
    },
    getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    },
    fecharAba(aba, key) {
      delete this.abas[key];
      this.abas = {
        ...this.abas,
      };
    },
    abrivicaoLinguagens(ling) {
      switch (ling.toLowerCase()) {
        case 'typescript': return 'ts';
        case 'javascript': return 'js';
      
        default: return ling.toLowerCase();
      }
    },
    linkAtivo(nome) {
      return (this.abaAbertaKey == camelCase(nome))?'ativo':'';
    }
  },
}

async function readmeGithub(projeto) {
  let readme = '';
  try {
    const response = await axios.get(`https://raw.githubusercontent.com/meunik/${projeto}/master/readme.md`);
    readme = response.data;
  } catch (error) {
    const response = await axios.get(`https://raw.githubusercontent.com/meunik/${projeto}/master/README.md`);
    readme = response.data;
  }
  console.clear();
  return readme;
}

async function readmeExtensoes(files) {
  let url = null;
  for (let i = 0; i < files.length; i++) {
    if (files[i].assetType == 'Microsoft.VisualStudio.Services.Content.Details') url = files[i].source;
  }
  if (url) {
    const response = await axios.get(url);
    return response.data;
  } else {
    return 'Nada foi encontrado';
  }
}

function esconderMenu() {
  var bodyWidth = document.body.clientWidth;
  var navegacaoWidth = store.getters.navegacaoWidth;

  if (bodyWidth < 768) {
    if (navegacaoWidth != '0px') {
      store.commit('navegacaoWidth', '0px');
    }
  }
}