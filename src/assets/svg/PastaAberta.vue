<template>
  <svg
    :width="(tamanho)?tamanho:padrao"
    :height="(tamanho)?tamanho:padrao"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="`icone ${(ativo)?'ativo':''}`"
    :style="`transform: rotate(${rotate}deg);${estilo}`"
  >
    <path
      d="M19 20H4c-1.11 0-2-.9-2-2V6c0-1.11.89-2 2-2h6l2 2h7a2 2 0 0 1 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z"
      fill="#90a4ae" />
  </svg>
</template>

<script>
export default {
  props: {
    tamanho: {
      type: Number,
      default: 24,
    },
    rotate: {
      type: Number,
      default: 0,
    },
    estilo: {
      type: String,
      default: '',
    },
    ativo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      padrao: 24,
    }
  },
};
</script>