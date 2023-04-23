<template>
  <svg
    :width="(tamanho)?tamanho:padrao"
    :height="(tamanho)?tamanho:padrao"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="`icone ${(ativo)?'ativo':''}`"
    :style="`transform: rotate(${rotate}deg);${estilo}`"
  >
    <path d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.9-2-2-2h-8l-2-2z" fill="#90a4ae" />
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