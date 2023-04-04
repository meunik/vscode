<template>
  <div>
    <CollapseAll v-if="icone == 'collapse'" :tamanho="tamanho"><slot></slot></CollapseAll>
    <DebugSvg v-if="icone == 'debug'" :tamanho="tamanho"><slot></slot></DebugSvg>
    <EngrenaguemSvg v-if="icone == 'engrenaguem'" :tamanho="tamanho"><slot></slot></EngrenaguemSvg>
    <ExploradorSvg v-if="icone == 'explorador'" :tamanho="tamanho"><slot></slot></ExploradorSvg>
    <Extensoes v-if="icone == 'extensoes'" :tamanho="tamanho"><slot></slot></Extensoes>
    <GithubInverted v-if="icone == 'github'" :tamanho="tamanho"><slot></slot></GithubInverted>
    <GitSvg v-if="icone == 'git'" :tamanho="tamanho"><slot></slot></GitSvg>
    <MonitorSvg v-if="icone == 'monitor'" :tamanho="tamanho"><slot></slot></MonitorSvg>
    <PesquisaSvg v-if="icone == 'pesquisa'" :tamanho="tamanho"><slot></slot></PesquisaSvg>
    <Seta v-if="icone == 'seta'" :tamanho="tamanho"><slot></slot></Seta>
    <TresPontos v-if="icone == 'tresPontos'" :tamanho="tamanho"><slot></slot></TresPontos>
    <UserSvg v-if="icone == 'user'" :tamanho="tamanho"><slot></slot></UserSvg>
    <MailSvg v-if="icone == 'email'" :tamanho="tamanho"><slot></slot></MailSvg>
    <LinkedinSvg v-if="icone == 'linkedin'" :tamanho="tamanho"><slot></slot></LinkedinSvg>
    <InstagramSvg v-if="icone == 'instagram'" :tamanho="tamanho"><slot></slot></InstagramSvg>
    <RelogioSvg v-if="icone == 'relogio'" :tamanho="tamanho"><slot></slot></RelogioSvg>
    <LocalizacaoSvg v-if="icone == 'localizacao'" :tamanho="tamanho"><slot></slot></LocalizacaoSvg>
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
    },
  };
</script>