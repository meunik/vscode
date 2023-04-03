<template>
  <div>
    <ExploradorSvg v-if="icone == 'explorador'" :tamanho="tamanho"><slot></slot></ExploradorSvg>
    <PesquisaSvg v-if="icone == 'pesquisa'" :tamanho="tamanho"><slot></slot></PesquisaSvg>
    <GitSvg v-if="icone == 'git'" :tamanho="tamanho"><slot></slot></GitSvg>
    <DebugSvg v-if="icone == 'debug'" :tamanho="tamanho"><slot></slot></DebugSvg>
    <Extensoes v-if="icone == 'extens'" :tamanho="tamanho"><slot></slot></Extensoes>
    <MonitorSvg v-if="icone == 'monitor'" :tamanho="tamanho"><slot></slot></MonitorSvg>
    <UserSvg v-if="icone == 'user'" :tamanho="tamanho"><slot></slot></UserSvg>
    <EngrenaguemSvg v-if="icone == 'engrenaguem'" :tamanho="tamanho"><slot></slot></EngrenaguemSvg>
    <GithubInverted v-if="icone == 'github'" :tamanho="tamanho"><slot></slot></GithubInverted>
    <CollapseAll v-if="icone == 'collapse'" :tamanho="tamanho"><slot></slot></CollapseAll>
  </div>
</template>

<script>
  import ExploradorSvg from '@/assets/svg/ExploradorSvg.vue'
  import PesquisaSvg from '@/assets/svg/PesquisaSvg.vue'
  import GitSvg from '@/assets/svg/GitSvg.vue'
  import DebugSvg from '@/assets/svg/DebugSvg.vue'
  import Extensoes from '@/assets/svg/Extensoes.vue'
  import MonitorSvg from '@/assets/svg/MonitorSvg.vue'
  import UserSvg from '@/assets/svg/UserSvg.vue'
  import EngrenaguemSvg from '@/assets/svg/EngrenaguemSvg.vue'
  import GithubInverted from '@/assets/svg/GithubInverted.vue'
  import CollapseAll from '@/assets/svg/CollapseAll.vue'

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
      ExploradorSvg,
      PesquisaSvg,
      GitSvg,
      DebugSvg,
      Extensoes,
      MonitorSvg,
      UserSvg,
      EngrenaguemSvg,
      GithubInverted,
      CollapseAll,
    },
  };
</script>