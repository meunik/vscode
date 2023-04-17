import store from '@/store/store'
import axios from 'axios'

/**
 */
export async function buscaExtensoes(extensao, tipo) {

  let filterType = 4;
  let filter = [];
  let extensoesIds = [];

  switch (tipo) {
    case 'id': filterType = 4; break;
    case 'nome': filterType = 10; break;
  
    default: filterType = 4; break;
  }

  if (!extensao) {
    extensoesIds = store.getters['VisualStudio/extensoesStaticaId'];
  } else {
    extensoesIds = (Array.isArray(extensao)) ? extensao : [extensao] ;
  }

  extensoesIds.forEach(element => {
    filter.push({
      filterType: filterType,
      value: element
    })
  });

  let criteria = [
    ...filter,
    {
      filterType: 8,
      value: "Microsoft.VisualStudio.Code"
    },
    {
      filterType: 12,
      value: "4096"
    }
  ]
  
  const headers = {
    headers: {
      "authority": "marketplace.visualstudio.com",
      "accept": "application/json;api-version=3.0-preview.1",
      "accept-language": "pt-BR,pt;q=0.9",
      "content-type": "application/json",
      "vscode-sessionid": "c215fa49-92fe-426d-8263-fa301b2b630b",
      "x-market-client-id": "VSCode 1.77.3",
      "x-market-user-id": "773a21c3-04a5-4833-99ce-abd4f1d380f8"
    }
  };

  const body = JSON.stringify({
    "filters": [
      {
        "criteria": criteria,
        "pageNumber": 1,
        "pageSize": 56,
        "sortBy": 0,
        "sortOrder": 0
      }
    ],
    "assetTypes": [],
    "flags": 950
  })

  const response = await axios.post('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', body, headers)

  let dadosExtensao = response.data.results[0].extensions;
  console.log(dadosExtensao);
  store.commit('VisualStudio/extensoes', dadosExtensao);
}