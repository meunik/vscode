<template>
  <div :class="`d-flex align-items-center ${(!!$slots.default)?'gap-1':''} ${classesDiv}`">
    <div :class="`${(completo)?'':'overflow-x-three-points'} ${classesSegundaDiv}`">
      <component
        v-if="componente"
        :is="componente"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <span :class="`${(!!$slots.default)?'d-contents':''} ${classesSpan}`"><slot></slot></span>
    </div>
  </div>
</template>

<script>
  import CollapseAll from '@/assets/svg/CollapseAll.vue';
  import DebugSvg from '@/assets/svg/DebugSvg.vue';
  import EngrenaguemSvg from '@/assets/svg/EngrenaguemSvg.vue';
  import ExploradorSvg from '@/assets/svg/ExploradorSvg.vue';
  import Extensoes from '@/assets/svg/Extensoes.vue';
  import GithubInverted from '@/assets/svg/GithubInverted.vue';
  import GitSvg from '@/assets/svg/GitSvg.vue';
  import MonitorSvg from '@/assets/svg/MonitorSvg.vue';
  import PesquisaSvg from '@/assets/svg/PesquisaSvg.vue';
  import Seta from '@/assets/svg/Seta.vue';
  import TresPontos from '@/assets/svg/TresPontos.vue';
  import UserSvg from '@/assets/svg/UserSvg.vue';
  import MailSvg from '@/assets/svg/MailSvg.vue';
  import LinkedinSvg from '@/assets/svg/LinkedinSvg.vue';
  import InstagramSvg from '@/assets/svg/InstagramSvg.vue';
  import RelogioSvg from '@/assets/svg/RelogioSvg.vue';
  import LocalizacaoSvg from '@/assets/svg/LocalizacaoSvg.vue';
  import PlacaMae from '@/assets/svg/PlacaMae.vue';
  import Ram from '@/assets/svg/Ram.vue';
  import PlacaVideo from '@/assets/svg/PlacaVideo.vue';
  import Cpu from '@/assets/svg/Cpu.vue';
  import MonitorWide from '@/assets/svg/MonitorWide.vue';
  import MonitorUltraWide from '@/assets/svg/MonitorUltraWide.vue';
  import M2 from '@/assets/svg/M2.vue';
  import Ssd from '@/assets/svg/Ssd.vue';
  import Hd from '@/assets/svg/Hd.vue';
  import Mouse from '@/assets/svg/Mouse.vue';
  import Teclado from '@/assets/svg/Teclado.vue';
  import Headfone from '@/assets/svg/Headfone.vue';
  import Cadeira from '@/assets/svg/Cadeira.vue';
  import Microfone from '@/assets/svg/Microfone.vue';
  import CaixaSom from '@/assets/svg/CaixaSom.vue';

  export default {
    props: {
      icone: {
        type: String,
        default: '',
      },
      tamanho: {
        type: Number,
        default: null,
      },
      completo: {
        type: Boolean,
        default: true,
      },
      rotate: {
        type: Number,
        default: 0,
      },
      estilo: {
        type: String,
        default: "",
      },
      ativo: {
        type: Boolean,
        default: false,
      },
      classesDiv: {
        type: String,
        default: "",
      },
      classesSegundaDiv: {
        type: String,
        default: "",
      },
      classesSpan: {
        type: String,
        default: "",
      },
    },
    components: {
      CollapseAll,
      DebugSvg,
      EngrenaguemSvg,
      ExploradorSvg,
      Extensoes,
      GithubInverted,
      GitSvg,
      MonitorSvg,
      PesquisaSvg,
      Seta,
      TresPontos,
      UserSvg,
      MailSvg,
      LinkedinSvg,
      InstagramSvg,
      RelogioSvg,
      LocalizacaoSvg,
      PlacaMae,
      Ram,
      PlacaVideo,
      Cpu,
      MonitorWide,
      MonitorUltraWide,
      M2,
      Ssd,
      Hd,
      Mouse,
      Teclado,
      Headfone,
      Cadeira,
      Microfone,
      CaixaSom,
    },
    data() {
      return {
        componente: null
      }
    },
    created() {
      switch (this.icone) {
        case 'collapse': this.componente = 'CollapseAll'; break;
        case 'debug': this.componente = 'DebugSvg'; break;
        case 'engrenaguem': this.componente = 'EngrenaguemSvg'; break;
        case 'explorador': this.componente = 'ExploradorSvg'; break;
        case 'extensoes': this.componente = 'Extensoes'; break;
        case 'github': this.componente = 'GithubInverted'; break;
        case 'git': this.componente = 'GitSvg'; break;
        case 'monitor': this.componente = 'MonitorSvg'; break;
        case 'pesquisa': this.componente = 'PesquisaSvg'; break;
        case 'seta': this.componente = 'Seta'; break;
        case 'tresPontos': this.componente = 'TresPontos'; break;
        case 'user': this.componente = 'UserSvg'; break;
        case 'email': this.componente = 'MailSvg'; break;
        case 'linkedin': this.componente = 'LinkedinSvg'; break;
        case 'instagram': this.componente = 'InstagramSvg'; break;
        case 'relogio': this.componente = 'RelogioSvg'; break;
        case 'localizacao': this.componente = 'LocalizacaoSvg'; break;
        case 'placaMae': this.componente = 'PlacaMae'; break;
        case 'ram': this.componente = 'Ram'; break;
        case 'placaVideo': this.componente = 'PlacaVideo'; break;
        case 'cpu': this.componente = 'Cpu'; break;
        case 'monitorWide': this.componente = 'MonitorWide'; break;
        case 'monitorUltraWide': this.componente = 'MonitorUltraWide'; break;
        case 'm2': this.componente = 'M2'; break;
        case 'ssd': this.componente = 'Ssd'; break;
        case 'hd': this.componente = 'Hd'; break;
        case 'mouse': this.componente = 'Mouse'; break;
        case 'teclado': this.componente = 'Teclado'; break;
        case 'headfone': this.componente = 'Headfone'; break;
        case 'cadeira': this.componente = 'Cadeira'; break;
        case 'microfone': this.componente = 'Microfone'; break;
        case 'caixaSom': this.componente = 'CaixaSom'; break;
      
        default:break;
      }
    },
  };
</script>