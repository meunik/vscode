<template>
  <svg
    :width="(tamanho)?tamanho:padrao"
    :height="(tamanho)?tamanho:padrao"
    viewBox="0 0 354 349"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="`icone ${(ativo)?'ativo':''}`"
    :style="`transform: rotate(${rotate}deg);${estilo}`"
  >
    <g filter="url(#filter0_d_951_90877)">
      <path
        d="M341.214 336.601H4.72656C7.46729 225.237 11.4978 116.178 8.15824 4.83789H337.782C335.479 117.308 338.819 226.367 341.214 336.601Z"
        :fill="cor" />
      <path
        d="M341.214 336.601H4.72656C7.46729 225.237 11.4978 116.178 8.15824 4.83789H337.782C335.479 117.308 338.819 226.367 341.214 336.601Z"
        fill="black" fill-opacity="0.3" />
    </g>
    <path
      d="M341.214 335.494H4.72656C7.46729 224.131 9.19465 112.767 5.85511 1.31152H340.086C337.782 113.874 338.819 225.237 341.214 335.494Z"
      :fill="cor" />
    <path
      d="M341.214 335.494H4.72656C7.46729 224.131 9.19465 112.767 5.85511 1.31152H340.086C337.782 113.874 338.819 225.237 341.214 335.494Z"
      fill="url(#paint0_linear_951_90877)" />
    <text
      x="50%"
      y="50%"
      dominant-baseline="middle"
      text-anchor="middle"
      fill="#000"
      :font-size="`${tamanhoPxTexto}px`"
    >
      {{texto}}
    </text>
    <defs>
      <filter id="filter0_d_951_90877" x="0.726562" y="0.837891" width="352.488" height="347.763"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_951_90877" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_951_90877" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_951_90877" x1="172.97" y1="337.2" x2="172.97" y2="9.90808"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.25" />
        <stop offset="0.04" stop-color="white" stop-opacity="0.05" />
        <stop offset="0.12" stop-opacity="0.02" />
        <stop offset="0.18" stop-opacity="0.03" />
        <stop offset="0.58" stop-opacity="0" />
        <stop offset="0.79" stop-opacity="0.05" />
        <stop offset="0.85" stop-color="#EFEFEF" stop-opacity="0.1" />
        <stop offset="0.87" stop-color="#A5A5A5" stop-opacity="0.04" />
        <stop offset="0.92" stop-opacity="0.01" />
        <stop offset="0.98" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    tamanho: {
      type: Number,
      default: 100,
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
    cor: {
      type: String,
      default: '#FFD3D3',
    },
    texto: {
      type: String,
      default: '',
    },
    tamanhoPxTexto: {
      type: Number,
      default: 40,
    },
  },
  data() {
    return {
      padrao: 100,
    }
  },
};
</script>