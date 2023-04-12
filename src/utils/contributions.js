import store from '@/store/store'
import axios from 'axios'

/**
 */
export async function contributions() {

  let tok = 'ghp_MhvZ249Inrt97K5Knkpy'
  let en = '8Q3GqUH15M2pRF7D'
  
  const headers = {
    headers: {
      Authorization: `Bearer ${tok}${en}`,
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    "query": "{\r\n  user(login: \"meunik\") {\r\n    name\r\n    contributionsCollection {\r\n      contributionCalendar {\r\n        colors\r\n        totalContributions\r\n        weeks {\r\n          contributionDays {\r\n            color\r\n            contributionCount\r\n            date\r\n            weekday\r\n          }\r\n          firstDay\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",
    "variables": {}
  })

  const response = await axios.post('https://api.github.com/graphql', body, headers)

  store.commit('Git/contributions', response.data.data.user.contributionsCollection.contributionCalendar);

  /////////////////////////////////////////////////////////////////////////////////////

  var box = document.getElementById('box');
  var boxWidthAntes = box.clientWidth;

  var ResizeSensor = require('css-element-queries/src/ResizeSensor');

  new ResizeSensor(box, function(){
    var contribLado = store.getters.contribTamanho;
    var boxWidth = box.clientWidth;
    var subitracao = boxWidthAntes - boxWidth;
    var ladoExtra = 4.076923076923077;

    if (subitracao != 0) {
      var conta = (((parseFloat(contribLado) + ladoExtra)*52 - (subitracao))/52) - ladoExtra;

      store.commit('contribTamanho', `${conta}`);
      
      console.log("----------------");
      console.log(`contribLado: ${contribLado}, subitracao: ${subitracao}, boxWidthAntes: ${boxWidthAntes}, boxWidth: ${boxWidth}`);
      console.log(`Total: ${conta}`);
      console.log((parseFloat(contribLado) + ladoExtra)*52 - (subitracao));
      console.log(`(((${parseFloat(contribLado)} + ${ladoExtra})*52 + (${subitracao}))/52) - ${ladoExtra}`);
    }

    boxWidthAntes = box.clientWidth
  });
}