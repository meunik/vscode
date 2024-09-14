import axios from 'axios';
import { markdown } from '@/utils/markdown.js';
import store from '@/store/store';
import { camelCase } from '@/utils/lodash.js';
import { blackList } from "@/utils/RepoBlackList";

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
        let repositorios = this.$store.getters['Git/repositorios']
        return repositorios.filter(item => !blackList.includes(item.name))
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
    navegacaoWidthMin: {
      get() {
        return this.$store.getters['navegacaoWidthMin']
      },
      set(value) {
        this.$store.commit('navegacaoWidthMin', value)
      }
    },
    editAbertos: {
      get() {
        return this.$store.getters['editAbertos']
      },
      set(value) {
        this.$store.commit('editAbertos', value)
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

        case 'extensoes':
          let content = await readmeExtensoes(complemento.versions[0].files);
          nome = complemento.displayName;
          tipo = 'extensoes';
          icone = 'extensoes';
          conteudo = markdown(content);
          break;

        case 'quadroTarefas': 
          nome = complemento.nome;
          tipo = 'quadroTarefas';
          icone = 'calendario';
          componente = 'quadroTarefas';
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
          icone = 'notas';
          componente = 'perfil';
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

        case 'editor': 
          nome = 'Editor';
          tipo = 'editor';
          icone = 'texto';
          componente = 'editor';
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
          complemento: complemento,
        },
      };

      if (issetInEditAbertos(this.editAbertos, nomeCamelCase)) {
        this.editAbertos.push({
          identificador: nomeCamelCase,
          text: nome,
          icone: icone,
          rotate: 0,
          tipoAba: tipoAba,
          linkAtivo: nome,
          complemento: complemento,
        });
      }

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
      
      let indexEditAbertos = 0;
      let filtro = this.editAbertos.filter((val, index) => {
        indexEditAbertos = index
        return val.identificador == key;
      });
      delete this.editAbertos[indexEditAbertos];
      let arr = {
        ...this.editAbertos,
      };
      const entries = Object.values(arr);
      this.editAbertos = entries
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

function issetInEditAbertos(arr, valor) {
  let filtro = arr.filter(val => {
    return val.identificador == valor;
  });
  return (!!filtro.length)?false:true;
}

function issetIn(arr, parametro, valor) {
  // let index = arr.findIndex(val => val[parametro] == valor);
  // return((index == 0)&&(arr.length != 0))?true:false;
}