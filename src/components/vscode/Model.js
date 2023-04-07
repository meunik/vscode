export let Model = {
  computed: {
    perfil: {
      get() {
        return this.$store.getters['Git/perfil']
      },
      set(value) {
        this.$store.commit('Git/perfil', value)
      }
    },
    contributions: {
      get() {
        return this.$store.getters['Git/contributions']
      },
      set(value) {
        this.$store.commit('Git/contributions', value)
      }
    },
    repositorios: {
      get() {
        return this.$store.getters['Git/repositorios']
      },
      set(value) {
        this.$store.commit('Git/repositorios', value)
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
        return this.$store.getters['Git/readme']
      },
      set(value) {
        this.$store.commit('Git/readme', value)
      }
    },
    readmePerfil: {
      get() {
        return this.$store.getters['Git/readmePerfil']
      },
      set(value) {
        this.$store.commit('Git/readmePerfil', value)
      }
    },
  }
}