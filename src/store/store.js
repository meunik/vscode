import Vue from 'vue'
import Vuex from 'vuex'

import Git from './modulos/Git';
import Principal from './modulos/Principal';

Vue.use(Vuex)

const state = {}
const getters = {}
const mutations = {}
const actions = {}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    Git,
    Principal,
  }  
})