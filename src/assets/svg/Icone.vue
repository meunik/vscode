<template>
  <div :class="`d-flex align-items-center ${(!!$slots.default)?'gap-1':''} ${classesDiv}`">
    <div class="d-flex">
      <CollapseAll
        v-if="icone == 'collapse'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <DebugSvg
        v-if="icone == 'debug'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <EngrenaguemSvg
        v-if="icone == 'engrenaguem'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <ExploradorSvg
        v-if="icone == 'explorador'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <Extensoes
        v-if="icone == 'extensoes'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <GithubInverted
        v-if="icone == 'github'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <GitSvg
        v-if="icone == 'git'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <MonitorSvg
        v-if="icone == 'monitor'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <PesquisaSvg
        v-if="icone == 'pesquisa'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <Seta
        v-if="icone == 'seta'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <TresPontos
        v-if="icone == 'tresPontos'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <UserSvg
        v-if="icone == 'user'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <MailSvg
        v-if="icone == 'email'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <LinkedinSvg
        v-if="icone == 'linkedin'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <InstagramSvg
        v-if="icone == 'instagram'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <RelogioSvg
        v-if="icone == 'relogio'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
      <LocalizacaoSvg
        v-if="icone == 'localizacao'"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="estilo"
        :ativo="ativo"
      />
    </div>
    <span :class="`${(completo)?'':'overflow-x-three-points'}`"><slot></slot></span>
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