import { ref, watch } from 'vue'

const temaAtual = ref('dark')
const preferenciaTema = ref('dark')

const temas = [
  { id: 'dark', nome: 'Dark', tipo: 'escuro' },
  { id: 'light', nome: 'Light', tipo: 'claro' },
  { id: 'monokai', nome: 'Monokai', tipo: 'escuro' },
  { id: 'dracula', nome: 'Dracula', tipo: 'escuro' },
  { id: 'solarized', nome: 'Solarized Light', tipo: 'claro' },
  { id: 'seilaColor', nome: 'SeilaColor', tipo: 'escuro' }
]

function aplicarTema(tema) {
  document.documentElement.className = tema
  temaAtual.value = tema
}

function obterPreferenciaSistema() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function selecionarTema(tema) {
  if (tema === 'sistema') {
    preferenciaTema.value = 'sistema'
    aplicarTema(obterPreferenciaSistema())
  } else {
    preferenciaTema.value = tema
    aplicarTema(tema)
  }
  localStorage.setItem('tema', preferenciaTema.value)
}

function inicializarTema() {
  const temaSalvo = localStorage.getItem('tema')
  if (temaSalvo) selecionarTema(temaSalvo)
  else selecionarTema('sistema')
}

if (typeof window !== 'undefined') {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (preferenciaTema.value === 'sistema') aplicarTema(e.matches ? 'dark' : 'light')
  })
}

export function useTemas() {
  return {
    temaAtual,
    preferenciaTema,
    temas,
    selecionarTema,
    inicializarTema
  }
}
