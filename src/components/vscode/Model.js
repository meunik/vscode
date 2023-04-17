import axios from 'axios'
import { markdown } from '@/utils/markdown.js'
import store from '@/store/store'

export let Model = {
  computed: {
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
  },
  methods: {
    async novaAba(tipoAba, complemento) {
      esconderMenu();
      
      let nome = null;
      let linguagem = null;
      let tipo = null;
      let icone = null;
      let img = null;
      let conteudo = null;
      let componente = null;

      switch (tipoAba) {
        case 'explorador': 
          let readme = await readmeGithub(complemento.name);
          nome = complemento.name;
          linguagem = complemento.language;
          tipo = 'explorador';
          conteudo = markdown(readme);
          break;

        case 'perfil': 
          nome = 'Perfil Github';
          tipo = 'explorador';
          componente = complemento;
          break;

        case 'extensoes':
          let content = await readmeExtensoes(complemento.versions[0].files);
          nome = complemento.displayName;
          tipo = 'extensoes';
          conteudo = markdown(content);
          break;
      
        default: break;
      }
      
      this.abas = {
        ...this.abas,
        [nome]: {
          nome: nome,
          linguagem: linguagem,
          tipo: tipo,
          icone: icone,
          img: img,
          conteudo: conteudo,
          componente: componente,
        },
      };
      const arrayKeys = Object.keys(this.abas);
      const key = parseInt(this.getKeyByValue(arrayKeys, nome));
      this.abaIndex = key;
      // store.commit('abaIndex', key)
      // console.log(key);
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
    }
  }
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