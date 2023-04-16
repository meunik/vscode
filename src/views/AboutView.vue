<template>
  <div class="about">
    <div>
      <b-tabs v-model="abaIndex">
        <b-tab v-for="(aba, key) in abas" :key="`dyn-tab-${key}`">
          <template #title>
            {{ aba.nome }}.{{ abrivicaoLinguagens(aba.linguagem) }}
          <b-button class="float-right btn-sem-borda" @click="fecharAba(aba, key)">
            <font-awesome-icon :icon="['fas', 'xmark']" class="pl-1"/>
          </b-button>
          </template>
          <!-- {{abaIndex}} -->
          <div v-if="aba.readme" v-html="aba.readme" class="p-3"></div>
        </b-tab>

        <template #empty>
          <div class="text-center text-muted">
            There are no open tabs<br>
            Open a new tab using the <b>+</b> button above.
          </div>
        </template>
      </b-tabs>
    </div>

  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js'
  import Perfil from '@/components/vscode/github/Perfil'

  export default {
    mixins: [Model],
    components: {
      Perfil,
    },
  }
</script>