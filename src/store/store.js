import Vue from 'vue'
import Vuex from 'vuex'

import Git from './modulos/Git';
import Utils from './modulos/Utils';
import Principal from './modulos/Principal';
import VisualStudio from './modulos/VisualStudio';

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
    Utils,
    Principal,
    VisualStudio,
  }  
})