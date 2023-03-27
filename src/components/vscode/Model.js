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
  }
}