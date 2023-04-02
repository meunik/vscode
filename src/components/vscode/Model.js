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
    readme: {
      get() {
        return this.$store.getters['readme']
      },
      set(value) {
        this.$store.commit('readme', value)
      }
    },
    readmePerfil: {
      get() {
        return this.$store.getters['readmePerfil']
      },
      set(value) {
        this.$store.commit('readmePerfil', value)
      }
    },
  }
}