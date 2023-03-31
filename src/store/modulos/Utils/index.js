import axios from 'axios'

let state = {
  navegacaoWidth: '250px',
}

const getters = {
  navegacaoWidth: store => store.navegacaoWidth,
}
  
const mutations = {
  navegacaoWidth: (state, obj) => state.navegacaoWidth = obj,
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