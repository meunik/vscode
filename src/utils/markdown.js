import store from '@/store/store'
// import {markdownIt} from '../assets/js/markdown-it.js'

export function markdown(obj) {
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

    return md.render(obj);

    
    // var md = window.markdownit();
    // var result = md.render('# markdown-it rulezz!');
    // console.log(result);
    // return result;
}