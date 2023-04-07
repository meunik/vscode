import { api } from '../../api'
import axios from 'axios'

export const actions = {
  async buscaPerfil({commit}) {
    const response = await axios.get('https://api.github.com/users/meunik')
    let perfil = response.data
    commit('perfil', perfil);
  },
  async buscaContributions({commit}) {
    const response = await axios.get('https://github.com/users/meunik/contributions')
    let contributions = response.data
    commit('contributions', contributions);
  },
  async buscaRepositorios({commit}) {
    const response = await axios.get('https://api.github.com/users/meunik/repos')
    let repositorios = response.data
    commit('repositorios', repositorios);
  },
  async buscaReadme({commit}, projeto) {
    console.log(projeto);
    try {
      const response = await axios.get(`https://raw.githubusercontent.com/meunik/${projeto}/master/readme.md`)
      let readme = response.data
      commit('readme', readme);
    } catch (error) {
      const response = await axios.get(`https://raw.githubusercontent.com/meunik/${projeto}/master/README.md`)
      let readme = response.data
      commit('readme', readme);
    }
  },
  async buscaReadmePerfil({commit}) {
    const response = await axios.get(`https://raw.githubusercontent.com/meunik/meunik/main/README.md`)
    let readmePerfil = response.data;
    var removeSnake = readmePerfil.replace('![Snake animation](https://github.com/meunik/meunik/blob/output/github-contribution-grid-snake.svg)', '');
    commit('readmePerfil', removeSnake);
  },
}
