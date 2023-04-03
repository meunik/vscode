<template>
  <div class="h-12 d-flex justify-content-center align-items-center box-icon-menu">
    <div class="d-flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="(tamanho)?tamanho:padrao"
        :height="(tamanho)?tamanho:padrao"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        :class="`icone ${(ativo)?'ativo':''}`"
        :style="`transform: rotate(${rotate}deg);${estilo}`"
      >
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
      </svg>
    </div>
    <span class="overflow-x-three-points d-contents"><slot></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    tamanho: {
      type: Number,
      default: 16,
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
      padrao: 16,
    }
  },
};
</script>