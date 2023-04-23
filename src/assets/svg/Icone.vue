<template>
  <div :class="`d-flex align-items-center ${(!!$slots.default)?'gap-1':''} ${classesDiv}`">
    <div :class="`${(completo)?'':'overflow-x-three-points'} ${classesSegundaDiv}`">
      <component
        v-if="componente"
        :is="componente"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo}`"
        :ativo="ativo"
        :class="`${(!!$slots.default)?'m-icon':''} ${classesIcone}`"
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
  import Circulo from '@/assets/svg/Circulo.vue';
  import Camera from '@/assets/svg/Camera.vue';
  import BlocoNotas from '@/assets/svg/BlocoNotas.vue';
  import Notas from '@/assets/svg/Notas.vue';
  import Verificado from '@/assets/svg/Verificado.vue';
  import Monitor from '@/assets/svg/Monitor.vue';
  import Pasta from '@/assets/svg/Pasta.vue';
  import PastaAberta from '@/assets/svg/PastaAberta.vue';

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
      classesIcone: {
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
      Circulo,
      Camera,
      BlocoNotas,
      Notas,
      Verificado,
      Monitor,
      Pasta,
      PastaAberta,
    },
    computed: {
      componente() {
        // definir caso queira definir um nome diferente do nome do componente
        switch (this.icone) {
          case 'collapse': return 'CollapseAll';
          case 'debug': return 'DebugSvg';
          case 'engrenaguem': return 'EngrenaguemSvg';
          case 'explorador': return 'ExploradorSvg';
          case 'github': return 'GithubInverted';
          case 'git': return 'GitSvg';
          case 'monitorRemoto': return 'MonitorSvg';
          case 'pesquisa': return 'PesquisaSvg';
          case 'user': return 'UserSvg';
          case 'email': return 'MailSvg';
          case 'linkedin': return 'LinkedinSvg';
          case 'instagram': return 'InstagramSvg';
          case 'relogio': return 'RelogioSvg';
          case 'localizacao': return 'LocalizacaoSvg';
        
          default: return this.icone;
        }
      }
    }
  };
</script>

<style>
.m-icon {
  margin-right: 4px;
  margin-bottom: 2px;
}
</style>