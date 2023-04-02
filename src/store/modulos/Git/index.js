import axios from 'axios'
// import markdownIt from '@/assets/js/markdown-it.js'
// import highlight from '../../../assets/js/highlight.min.js'

let state = {
  readme: '',
  readmePerfil: '',
  repositorios: {
    id: 0,
    node_id: "",
    name: "",
    full_name: "",
    private: false,
    owner: {},
    html_url: "",
    description: null,
    fork: false,
    url: "",
  },
}

const getters = {
  repositorios: store => store.repositorios,
  readme: store => store.readme,
  readmePerfil: store => store.readmePerfil,
}
  
const mutations = {
  repositorios: (state, obj) => state.repositorios = obj,
  readmePerfil(state, obj) {
    var hljs = require('highlight.js');
    // var md = window.markdownit();

    var md = window.markdownit({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        lang = 'html'
        if (lang && hljs.getLanguage(lang)) {
          console.log(str);
          try {
            return hljs.highlight(str, {
              language: lang,
              code: true,
              ignoreIllegals: true
            }).value;
          } catch (__) {}
        }
    
        return '';
      }
    });

    var result = md.render(obj);
    state.readmePerfil = result
  },
  readme(state, obj) {
    var hljs = require('highlight.js');
    // var md = window.markdownit();
    
    var md = window.markdownit({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs"><code>' +
                   hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                   '</code></pre>';
          } catch (__) {}
        }
    
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
      }
    });

    // var md = window.markdownit({
    //   html: true,
    //   linkify: true,
    //   typographer: true,
    //   highlight: function (str, lang) {
    //     if (lang && hljs.getLanguage(lang)) {
    //       console.log(str);
    //       try {
    //         return hljs.highlight(str, {
    //           language: lang,
    //           code: true,
    //           ignoreIllegals: true
    //         }).value;
    //       } catch (__) {}
    //     }
    
    //     return '';
    //   }
    // });

    var result = md.render(obj);
    state.readme = result
  },
}
  
const actions = {
  async buscaRepositorios({commit}) {
    const response = await axios.get('https://api.github.com/users/meunik/repos')
    let repositorios = response.data
    commit('repositorios', repositorios);
  },
  async buscaReadme({commit}, projeto) {
    const response = await axios.get(`https://raw.githubusercontent.com/meunik/${projeto}/master/readme.md`)
    let readme = response.data
    commit('readme', readme);
  },
  async buscaReadmePerfil({commit}) {
    const response = await axios.get(`https://raw.githubusercontent.com/meunik/meunik/main/README.md`)
    let readmePerfil = response.data
    commit('readmePerfil', readmePerfil);
  },
}
  
export default {
  state,
  mutations,
  getters,
  actions
}