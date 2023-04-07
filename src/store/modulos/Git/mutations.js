export const mutations = {
  perfil: (state, obj) => state.perfil = obj,
  contributions: (state, obj) => state.contributions = obj,
  repositorios: (state, obj) => state.repositorios = obj,

  readmePerfil(state, obj) {
    var hljs = require('highlight.js');
    var md = windowMarkdownIt(hljs, 'html');
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

    var result = md.render(obj);
    state.readme = result
  },
}

function windowMarkdownIt(hljs, linguagem) {
  return window.markdownit({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      if(!!linguagem) lang = linguagem;
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
}