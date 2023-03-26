<template>
  <div class="d-flex flex-col justify-content-between menu-vscode gap-menu-vscode w-menu-vscode">
    <div class="d-flex flex-col gap-menu-vscode">
      <ExploradorSvg />
      <PesquisaSvg />
      <GitSvg />
      <DebugSvg />
      <Extensoes />
      <MonitorSvg />

    </div>
    <div class="d-flex flex-col align-items-center gap-menu-vscode">
      <UserSvg />
      <EngrenaguemSvg />
    </div>
  </div>
</template>
<script>

import ExploradorSvg from '../../../assets/svg/ExploradorSvg.vue'
import PesquisaSvg from '../../../assets/svg/PesquisaSvg.vue'
import GitSvg from '../../../assets/svg/GitSvg.vue'
import DebugSvg from '../../../assets/svg/DebugSvg.vue'
import Extensoes from '../../../assets/svg/Extensoes.vue'
import MonitorSvg from '../../../assets/svg/MonitorSvg.vue'

import UserSvg from '../../../assets/svg/UserSvg.vue'
import EngrenaguemSvg from '../../../assets/svg/EngrenaguemSvg.vue'

export default {
  components: {
    'ExploradorSvg': ExploradorSvg,
    'PesquisaSvg': PesquisaSvg,
    'GitSvg': GitSvg,
    'DebugSvg': DebugSvg,
    'Extensoes': Extensoes,
    'MonitorSvg': MonitorSvg,

    'UserSvg': UserSvg,
    'EngrenaguemSvg': EngrenaguemSvg,
  }
}
</script>