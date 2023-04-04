<template>
  <div class="d-flex align-items-center white-space-nowrap gap-1">
    <div class="d-flex">
      <svg
        :width="(tamanho)?tamanho:padrao"
        :height="(tamanho)?tamanho:padrao"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :class="`icone ${(ativo)?'ativo':''}`"
        :style="`transform: rotate(${rotate}deg);${estilo}`"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
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
      default: 20,
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
      padrao: 20,
    }
  },
};
</script>