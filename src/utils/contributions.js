import store from '../store/store'
import { getGithubContributions } from 'github-contributions-counter'

/**
 */
export function contributions() {
  getGithubContributions({
    username: 'meunik',
    token: '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' // secret
  }).then((r) => {
    // console.log(r.data)
    store.commit('Git/contributions', r.data.data.user.contributionsCollection.contributionCalendar);
    console.log(r.data.data.user.contributionsCollection.contributionCalendar);
  })
}