import axios from 'axios'

let state = {
  navegacaoWidth: '250px',
  contribTamanho: 7,
  abas: [],
  abaIndex: 0,
}

const getters = {
  navegacaoWidth: store => store.navegacaoWidth,
  contribTamanho: store => store.contribTamanho,
  abas: store => store.abas,
  abaIndex: store => store.abaIndex,
}
  
const mutations = {
  navegacaoWidth: (state, obj) => state.navegacaoWidth = obj,
  contribTamanho: (state, obj) => state.contribTamanho = obj,
  abas: (state, obj) => state.abas = obj,
  abaIndex: (state, obj) => state.abaIndex = obj,
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