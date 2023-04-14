<template>
  <div :class="`d-flex align-items-center ${(!!$slots.default)?'gap-1':''} ${classesDiv}`">
    <div :class="`${(completo)?'':'overflow-x-three-points'}`">
      <CollapseAll
        v-if="icone == 'collapse'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <DebugSvg
        v-if="icone == 'debug'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <EngrenaguemSvg
        v-if="icone == 'engrenaguem'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <ExploradorSvg
        v-if="icone == 'explorador'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <Extensoes
        v-if="icone == 'extensoes'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <GithubInverted
        v-if="icone == 'github'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <GitSvg
        v-if="icone == 'git'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <MonitorSvg
        v-if="icone == 'monitor'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <PesquisaSvg
        v-if="icone == 'pesquisa'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <Seta
        v-if="icone == 'seta'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <TresPontos
        v-if="icone == 'tresPontos'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <UserSvg
        v-if="icone == 'user'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <MailSvg
        v-if="icone == 'email'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <LinkedinSvg
        v-if="icone == 'linkedin'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <InstagramSvg
        v-if="icone == 'instagram'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <RelogioSvg
        v-if="icone == 'relogio'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <LocalizacaoSvg
        v-if="icone == 'localizacao'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo} ${(!!$slots.default)?'margin-right: 0.25rem; margin-bottom: 2px;':''}`"
        :ativo="ativo"
      />
      <span :class="`${(!!$slots.default)?'d-contents':''}`"><slot></slot></span>
    </div>
  </div>
</template>

<script>
  import CollapseAll from '@/assets/svg/CollapseAll.vue'
  import DebugSvg from '@/assets/svg/DebugSvg.vue'
  import EngrenaguemSvg from '@/assets/svg/EngrenaguemSvg.vue'
  import ExploradorSvg from '@/assets/svg/ExploradorSvg.vue'
  import Extensoes from '@/assets/svg/Extensoes.vue'
  import GithubInverted from '@/assets/svg/GithubInverted.vue'
  import GitSvg from '@/assets/svg/GitSvg.vue'
  import MonitorSvg from '@/assets/svg/MonitorSvg.vue'
  import PesquisaSvg from '@/assets/svg/PesquisaSvg.vue'
  import Seta from '@/assets/svg/Seta.vue'
  import TresPontos from '@/assets/svg/TresPontos.vue'
  import UserSvg from '@/assets/svg/UserSvg.vue'
  import MailSvg from '@/assets/svg/MailSvg.vue'
  import LinkedinSvg from '@/assets/svg/LinkedinSvg.vue'
  import InstagramSvg from '@/assets/svg/InstagramSvg.vue'
  import RelogioSvg from '@/assets/svg/RelogioSvg.vue'
  import LocalizacaoSvg from '@/assets/svg/LocalizacaoSvg.vue'

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
    }
  };
</script>