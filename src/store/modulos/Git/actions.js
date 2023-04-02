import { api } from '../../api'
import axios from 'axios'

export const actions = {
  async buscaPerfil({commit}) {
    const response = await axios.get('https://api.github.com/users/meunik')
    let perfil = response.data
    commit('perfil', perfil);
  },
  async buscaRepositorios({commit}) {
    const response = await axios.get('https://api.github.com/users/meunik/repos')
    let repositorios = response.data
    commit('repositorios', repositorios);
  },
  async buscaReadme({commit}, projeto) {
    const response = await axios.get(`https://raw.githubusercontent.com/meunik/${projeto}/master/readme.md`)
    let readme = response.data
    commit('readme', readme);
  },
  async buscaReadmePerfil({commit}) {
    const response = await axios.get(`https://raw.githubusercontent.com/meunik/meunik/main/README.md`)
    let readmePerfil = response.data;
    var removeSnake = readmePerfil.replace('![Snake animation](https://github.com/meunik/meunik/blob/output/github-contribution-grid-snake.svg)', '');
    commit('readmePerfil', removeSnake);
  },
}