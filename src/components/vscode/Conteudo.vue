<template>
  <div>
    <b-tabs v-model="abaControlador" @changed="attControlador()">
      <b-tab v-for="(aba, key) in abas" :key="`dyn-tab-${key}`" class="overflow-auto">
        <template #title>
          {{ aba.nome }}.{{ abrivicaoLinguagens(aba.linguagem) }}
        <b-button class="float-right btn-sem-borda" @click="fecharAba(aba, key)">
          <font-awesome-icon :icon="['fas', 'xmark']" class="pl-1"/>
        </b-button>
        </template>
        <div v-if="aba.readme" v-html="aba.readme" class="p-3"></div>
        <!-- <Perfil v-if="!!perfil" /> -->
      </b-tab>

      <template #empty>
        <div class="text-center text-muted">
          There are no open tabs<br>
          Open a new tab using the <b>+</b> button above.
        </div>
      </template>
    </b-tabs>
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
    data() {
      return {
        abaControlador: 0
      }
    },
    methods: {
      attControlador() {
        this.abaControlador = this.abaIndex;
      }
    }
  }
</script>