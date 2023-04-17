import axios from 'axios'
import { markdown } from '@/utils/markdown.js'

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
    async novaAba(nome, complemento) {
      let projeto = nome;
      let readme = '';
      try {
        const response = await axios.get(`https://raw.githubusercontent.com/meunik/${projeto}/master/readme.md`);
        readme = response.data;
      } catch (error) {
        const response = await axios.get(`https://raw.githubusercontent.com/meunik/${projeto}/master/README.md`);
        readme = response.data;
      }
      this.abas = {
        ...this.abas,
        [projeto]: {
          nome: projeto,
          linguagem: complemento,
          readme: markdown(readme),
        },
      };
      const arrayKeys = Object.keys(this.abas);
      const key = parseInt(this.getKeyByValue(arrayKeys, projeto));
      this.abaIndex = key;
      console.log(`key Models :${key}`);
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