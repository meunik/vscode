export let Model = {
  computed: {
    repositorios: {
      get() {
        return this.$store.getters['repositorios']
      },
      set(value) {
        this.$store.commit('repositorios', value)
      }
    },
    navegacaoWidth: {
      get() {
        return this.$store.getters['navegacaoWidth']
      },
      set(value) {
        this.$store.commit('navegacaoWidth', value)
      }
    },
  }
}