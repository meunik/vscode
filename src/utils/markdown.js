import store from '../store/store'
// import {markdownIt} from '../assets/js/markdown-it.js'

export function markdown() {
    // console.log(markdownIt);

    // var MarkdownIt = require(markdownIt),
    // md = new MarkdownIt();
    // var result = md.render('# markdown-it rulezz!');

    
    var md = window.markdownit();
    var result = md.render('# markdown-it rulezz!');
    console.log(result);
    return result;

    // // node.js, the same, but with sugar:
    // var md = require('markdown-it')();
    // var result = md.render('# markdown-it rulezz!');

    // // browser without AMD, added to "window" on script load
    // // Note, there is no dash in "markdownit".
    // var md = window.markdownit();
    // var result = md.render('# markdown-it rulezz!');
}