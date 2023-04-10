import store from '@/store/store'
import axios from 'axios'
// import { getGithubContributions } from 'github-contributions-counter'

/**
 */
export async function contributions() {
  
  const headers = {
    headers: {
      Authorization: `Bearer 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`,
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    "query": "{\r\n  user(login: \"meunik\") {\r\n    name\r\n    contributionsCollection {\r\n      contributionCalendar {\r\n        colors\r\n        totalContributions\r\n        weeks {\r\n          contributionDays {\r\n            color\r\n            contributionCount\r\n            date\r\n            weekday\r\n          }\r\n          firstDay\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",
    "variables": {}
  })

  const response = await axios.post('https://api.github.com/graphql', body, headers)

  store.commit('Git/contributions', response.data.data.user.contributionsCollection.contributionCalendar);
  console.log(response.data.data.user.contributionsCollection.contributionCalendar);


  // getGithubContributions({
  //   username: 'meunik',
  //   token: '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' // secret
  // }).then((r) => {
  //   // console.log(r.data)
  //   store.commit('Git/contributions', r.data.data.user.contributionsCollection.contributionCalendar);
  //   console.log(r.data.data.user.contributionsCollection.contributionCalendar);
  // })
}