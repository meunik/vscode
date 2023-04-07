import store from '../store/store'
import { getGithubContributions } from 'github-contributions-counter'

/**
 */
export function contributions() {
  getGithubContributions({
    username: 'meunik',
    token: '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' // secret
  }).then((r) => {
    console.log(r)
  })
}