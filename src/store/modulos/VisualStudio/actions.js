import { api } from '../../api'
import {buscaExtensoes} from '@/utils/buscaExtensoes.js';
import axios from 'axios'

export const actions = {
  async listaExtensoes({commit}) {
    console.log('response.data');
    // buscaExtensoes('bootstrap4-vscode', 'nome');
    buscaExtensoes();
  },
}
