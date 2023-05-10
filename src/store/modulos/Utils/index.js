import axios from 'axios'

let state = {
  navegacaoWidth: '250px',
  navegacaoWidthMin: null,
  contribTamanho: 7,
  abas: [],
  abaIndex: 0,
  abaControlador: 0,
  abaAbertaKey: '',
  carregando: false,
  editAbertos: [],
}

const getters = {
  navegacaoWidth: store => store.navegacaoWidth,
  navegacaoWidthMin: store => store.navegacaoWidthMin,
  contribTamanho: store => store.contribTamanho,
  abas: store => store.abas,
  abaIndex: store => store.abaIndex,
  abaControlador: store => store.abaControlador,
  abaAbertaKey: store => store.abaAbertaKey,
  carregando: store => store.carregando,
  editAbertos: store => store.editAbertos,
}
  
const mutations = {
  navegacaoWidth: (state, obj) => state.navegacaoWidth = obj,
  navegacaoWidthMin: (state, obj) => state.navegacaoWidthMin = obj,
  contribTamanho: (state, obj) => state.contribTamanho = obj,
  abas: (state, obj) => state.abas = obj,
  abaIndex: (state, obj) => state.abaIndex = obj,
  abaControlador: (state, obj) => state.abaControlador = obj,
  abaAbertaKey: (state, obj) => state.abaAbertaKey = obj,
  carregando: (state, obj) => state.carregando = obj,
  editAbertos: (state, obj) => state.editAbertos = obj,
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