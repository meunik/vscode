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