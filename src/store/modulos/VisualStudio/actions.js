import { api } from '../../api'
import {buscaExtensoes} from '@/utils/buscaExtensoes.js';
import axios from 'axios'

export const actions = {
  async listaExtensoes({commit}) {
    // buscaExtensoes('bootstrap4-vscode', 'nome');
    buscaExtensoes();
  },
}
