<template>
  <svg
    :width="(tamanho)?tamanho:padrao"
    :height="(tamanho)?tamanho:padrao"
    viewBox="0 0 342 358"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="`icone ${(ativo)?'ativo':''}`"
    :style="`transform: rotate(${rotate}deg);${estilo}`"
  >
    <g clip-path="url(#clip0_950_90700)">
      <g filter="url(#filter0_d_950_90700)">
        <path
          d="M333.988 357.719L0.726562 347.993C6.30396 236.745 9.83017 128.884 9.34618 17.4746L339.127 26.0251C333.872 138.403 334.425 247.438 333.988 357.719Z"
          :fill="cor" />
        <path
          d="M333.988 357.719L0.726562 347.993C6.30396 236.745 9.83017 128.884 9.34618 17.4746L339.127 26.0251C333.872 138.403 334.425 247.438 333.988 357.719Z"
          fill="black" fill-opacity="0.3" />
      </g>
      <path
        d="M334.126 356.658L0.75 346.887C6.3274 235.638 7.66413 125.473 7.06491 14.0635L341.455 22.6139C336.2 134.992 334.449 246.332 334.126 356.658Z"
        :fill="cor" />
      <path
        d="M334.126 356.658L0.75 346.887C6.3274 235.638 7.66413 125.473 7.06491 14.0635L341.455 22.6139C336.2 134.992 334.449 246.332 334.126 356.658Z"
        fill="url(#paint0_linear_950_90700)" />
      <path
        d="M145.922 0.396484H218.52L220.825 6.15826L219.673 13.0724L220.825 26.9006L219.673 33.8148L220.825 40.7289H145.922V0.396484Z"
        fill="#ECE5D2" fill-opacity="0.76" />
      <path
        d="M221.45 22.7756C221.196 20.4709 220.873 16.5529 220.712 14.2481C220.712 12.9345 221.427 10.3762 221.45 9.06255C221.434 7.50144 221.201 5.95009 220.758 4.45314C220.456 3.41591 220.087 2.39966 219.652 1.41094C219.537 1.06523 218.776 0.304688 218.546 0.304688C218.776 0.926959 219.444 2.60938 219.652 3.34689C220.097 4.84344 220.33 6.39508 220.343 7.95634C220.343 9.27002 219.491 11.8052 219.583 13.1419C219.744 15.4466 220.067 19.3646 220.343 21.6693C220.459 22.8217 220.343 25.7026 220.343 26.8549C220.343 28.6756 219.56 32.271 219.583 34.0917C219.583 35.0597 219.882 37.0878 220.09 38.5167C220.228 39.4386 220.343 40.107 220.343 40.107H145.141C145.387 40.5804 145.773 40.9666 146.247 41.2133H218.062C218.991 41.332 219.935 41.2454 220.827 40.9597C220.827 40.9597 221.496 40.6371 221.196 39.623C220.863 38.1719 220.701 36.6868 220.712 35.1979C220.712 33.3772 221.473 29.7819 221.45 27.9612C221.427 26.8088 221.565 23.928 221.45 22.7756Z"
        fill="#D4CEBF" />
    </g>
    <defs>
      <filter id="filter0_d_950_90700" x="-7.27344" y="9.47461" width="362.402" height="364.244"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_950_90700" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_950_90700" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_950_90700" x1="162.174" y1="355.479" x2="171.992" y2="28.187"
        gradientUnits="userSpaceOnUse">
        <stop stop-opacity="0" />
        <stop offset="0.04" stop-opacity="0.02" />
        <stop offset="0.12" stop-opacity="0.05" />
        <stop offset="0.18" stop-opacity="0.06" />
        <stop offset="0.58" stop-opacity="0" />
        <stop offset="0.85" stop-opacity="0.05" />
        <stop offset="0.96" stop-opacity="0.06" />
        <stop offset="1" stop-opacity="0.05" />
      </linearGradient>
      <clipPath id="clip0_950_90700">
        <rect width="340.728" height="357.414" fill="white" transform="translate(0.726562 0.304688)" />
      </clipPath>
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
  },
  data() {
    return {
      padrao: 100,
    }
  },
};
</script>