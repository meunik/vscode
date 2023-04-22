import axios from 'axios'

let state = {
  navegacaoWidth: '250px',
  contribTamanho: 7,
  abas: [],
  abaIndex: 0,
  abaControlador: 0,
  abaAbertaKey: '',
  carregando: false,
}

const getters = {
  navegacaoWidth: store => store.navegacaoWidth,
  contribTamanho: store => store.contribTamanho,
  abas: store => store.abas,
  abaIndex: store => store.abaIndex,
  abaControlador: store => store.abaControlador,
  abaAbertaKey: store => store.abaAbertaKey,
  carregando: store => store.carregando,
}
  
const mutations = {
  navegacaoWidth: (state, obj) => state.navegacaoWidth = obj,
  contribTamanho: (state, obj) => state.contribTamanho = obj,
  abas: (state, obj) => state.abas = obj,
  abaIndex: (state, obj) => state.abaIndex = obj,
  abaControlador: (state, obj) => state.abaControlador = obj,
  abaAbertaKey: (state, obj) => state.abaAbertaKey = obj,
  carregando: (state, obj) => state.carregando = obj,
}
  
const actions = {
  //
}
  
export default {
  state,
  mutations,
  getters,
  actions
}