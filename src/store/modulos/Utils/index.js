import axios from 'axios'

let state = {
  navegacaoWidth: '250px',
  contribTamanho: 7,
}

const getters = {
  navegacaoWidth: store => store.navegacaoWidth,
  contribTamanho: store => store.contribTamanho,
}
  
const mutations = {
  navegacaoWidth: (state, obj) => state.navegacaoWidth = obj,
  contribTamanho: (state, obj) => state.contribTamanho = obj,
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