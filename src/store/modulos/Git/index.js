import axios from 'axios'

let state = {
  repositorios: {
    id: 0,
    node_id: "",
    name: "",
    full_name: "",
    private: false,
    owner: {},
    html_url: "",
    description: null,
    fork: false,
    url: "",
  },
}

const getters = {
  repositorios: store => store.repositorios,
}
  
const mutations = {
  repositorios (state, obj) {
    state.repositorios = obj
  },
}
  
const actions = {
  async buscaRepositorios({commit}) {
    const response = await axios.get('https://api.github.com/users/meunik/repos')
    let repositorios = response.data
    commit('repositorios', repositorios);
  },
}
  
export default {
  state,
  mutations,
  getters,
  actions
}