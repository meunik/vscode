import {buscaExtensoes} from '@/utils/buscaExtensoes.js';

export const actions = {
  async listaExtensoes({commit}) {
    // buscaExtensoes('bootstrap4-vscode', 'nome');
    buscaExtensoes();
  },
}
