const MAPA_EXTENSOES = {
  js: 'javascript',
  ts: 'typescript',
  vue: 'vue',
  jsx: 'react',
  tsx: 'react',
  py: 'python',
  java: 'java',
  cpp: 'cpp',
  c: 'c',
  cs: 'csharp',
  php: 'php',
  rb: 'ruby',
  go: 'go',
  rs: 'rust',
  swift: 'swift',
  kt: 'kotlin',
  dart: 'dart',
  html: 'html',
  css: 'css',
  scss: 'sass',
  sass: 'sass',
  less: 'less',
  json: 'json',
  md: 'markdown',
  xml: 'xml',
  yaml: 'yaml',
  yml: 'yaml',
  toml: 'toml',
  sql: 'sql',
  sh: 'shell',
  bat: 'console',
  ps1: 'powershell'
}

export function obterIconeArquivo(nomeArquivo) {
  const extensao = nomeArquivo.split('.').pop().toLowerCase()
  const tipoIcone = MAPA_EXTENSOES[extensao]
  
  return tipoIcone ? `material-icon-theme:${tipoIcone}` : 'line-md:file-document-filled'
}
