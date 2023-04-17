<template>
  <div>
    <b-tabs v-model="abaControlador" @changed="attControlador()">
      <b-tab v-for="(aba, key) in abas" :key="`dyn-tab-${key}`" class="overflow-auto">
        <template #title>
          {{ aba.nome }}{{ (!!aba.linguagem) ? `.${abrivicaoLinguagens(aba.linguagem)}` : '' }}
        <b-button class="float-right btn-sem-borda" @click="fecharAba(aba, key)">
          <font-awesome-icon :icon="['fas', 'xmark']" class="pl-1"/>
        </b-button>
        </template>
        <div v-if="aba.conteudo" v-html="aba.conteudo" class="p-3"></div>
        <component v-if="aba.componente" :is="aba.componente" />
      </b-tab>

      <template #empty>
        <div class="text-center text-muted">
          Não seu o que colocar aqui<br>
          Vou ver e depois coloco.
        </div>
      </template>
    </b-tabs>
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js'

  export default {
    mixins: [Model],
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