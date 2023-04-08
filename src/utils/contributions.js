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