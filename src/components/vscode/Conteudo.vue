<template>
  <div>
    <b-tabs v-model="abaControlador" @changed="attControlador()" @input="trocaAba()" id="abas">
      <b-tab v-for="(aba, key) in abas" :key="`dyn-tab-${key}`" :id="`dyn-tab-${key}`" class="overflow-auto">
        <template #title>
          {{ aba.nome }}{{ (!!aba.linguagem) ? `.${abrivicaoLinguagens(aba.linguagem)}` : '' }}
          <b-button class="float-right btn-sem-borda noPrint" @click="fecharAba(aba, key)">
            <font-awesome-icon :icon="['fas', 'xmark']" class="pl-1"/>
          </b-button>
        </template>
        <div v-if="aba.conteudo" v-html="aba.conteudo" class="p-3"></div>
        <component v-if="aba.componente" :is="aba.componente" :complemento="aba.complemento"/>
      </b-tab>

      <template #empty>
        <div class="text-padrao h-100 gettingStartedContainer">

          <div class="gettingStartedCategoriesContainer">
            <div class="header">
              <h1 class="text-branco">Olá, sou Marcos Paulo 😁</h1>
              <p>Bem vindo ao meu site</p>
            </div>
            <div class="categories-column categories-column-left">
              <div class="index-list start-container">
                <h2>Iniciar</h2>
                <div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;">
                  <ul style="overflow: hidden; list-style: none;">
                    <li>
                      <a
                        href="#"
                        @click="novaAba('curriculo', perf)"
                        class="link-laranja text-decoration-none"
                      >
                        <Icone icone="github" :completo="false">Meu Currículo</Icone>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="index-list recently-opened">
                <h2>Recente</h2>
                <div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;">
                  <ul style="overflow: hidden; list-style: none;">
                    <li v-for="(aba, key) in abaStorage" :key="`recente-aba-${key}`">
                      <a
                        href="#"
                        @click="novaAba(aba.tipoAba, aba.complemento)"
                        class="link-laranja text-decoration-none"
                      >
                        <Icone v-if="aba.icone" :icone="aba.icone" :tamanho="16" :completo="false">{{aba.nome}}</Icone>
                        <span v-else>{{aba.nome}}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="categories-column categories-column-right">
              <div class="index-list getting-started d-flex flex-column gap-4">
                
                <div class="d-flex gap-4">
                  <div class="d-flex align-items-center justify-content-center" style="width: 130px;">
                    <img src="https://avatars.githubusercontent.com/u/50606021?v=4" alt="Foto de Perfil do GitHub" class="avatar-user">
                  </div>
                  <div class="d-flex align-items-center justify-content-center">
                    <span>💻 Atualmente trabalho como Full Stack (Vue + Laravel).</span>
                  </div>
                </div>
                <div class="d-flex gap-4 flex-wrap">
                  <p class="m-0">Stacks:</p>
                  <Icone icone="php" :tamanho="30" />
                  <Icone icone="laravel" :tamanho="30" />
                  <Icone icone="mysql" :tamanho="30" />
                  <Icone icone="gitStack" :tamanho="30" />
                  <Icone icone="figma" :tamanho="30" />
                  <Icone icone="react" :tamanho="30" />
                  <Icone icone="html5" :tamanho="30" />
                  <Icone icone="css3" :tamanho="30" />
                  <Icone icone="javaScript" :tamanho="30" />
                  <Icone icone="jquery" :tamanho="30" />
                  <Icone icone="vue" :tamanho="30" />
                  <Icone icone="tailwind" :tamanho="30" />
                  <Icone icone="bootstrap" :tamanho="30" />
                </div>
                <!-- <h2>Passo a passo</h2> -->
                <!-- <b-row class="gap-4">
                  <b-col cols="5"><Postit :tipo="1" :tamanho="100" /></b-col>
                  <b-col cols="5"><Postit :tipo="2" :tamanho="100" cor="#FFD3D3" /></b-col>
                  <b-col cols="5"><Postit :tipo="3" :tamanho="100" cor="#FFF" /></b-col>
                  <b-col cols="5"><Postit :tipo="4" :tamanho="100" cor="#26E5FF" /></b-col>
                </b-row> -->
              </div>
            </div>
            <!-- <div class="footer">
              <p class="showOnStartup">Mostrar a página inicial na inicialização</p>
            </div> -->
          </div>

        </div>
      </template>
    </b-tabs>
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js';
  import Icone from '@/assets/svg/Icone.vue';
  import Postit from '@/assets/svg/postit/Postit.vue';
  import { camelCase } from '@/utils/lodash.js';

  import Perfil from '@/components/vscode/github/Perfil';
  import Setup from '@/components/vscode/Navegacoes/Setup.vue';
  import Fotos from '@/components/vscode/Navegacoes/Fotos.vue';
  import Editor from '@/components/vscode/Navegacoes/Editor.vue';
  import QuadroTarefas from '@/components/vscode/Navegacoes/components/QuadroTarefas.vue';

  export default {
    mixins: [Model],
    components: {
      Postit,
      Icone,
      Perfil,
      Setup,
      Fotos,
      Editor,
      QuadroTarefas,
    },
    watch: {
      abaControlador: function(newVal, oldVal) {
        // console.log('testandooo');
      },
    },
    data() {
      return {
        perf: Perfil,
        scrollDireta: 0,
        scrollEsquerda: 0,
      }
    },
    computed: {
      abaStorage() {
        if (!!localStorage.abas) {
          // console.log(JSON.parse(localStorage.abas));
          return JSON.parse(localStorage.abas);
        }
      },
    },
    methods: {
      trocaAba() {
        let arrayKeys = Object.keys(this.abas);
        let abaKey = arrayKeys[this.abaControlador]
        this.abaAbertaKey = camelCase(abaKey);
        
        const elemento = document.getElementById(`dyn-tab-${this.abaAbertaKey}___BV_tab_button__`);
        if (elemento) elemento.scrollIntoView();
      },
      attControlador() {
        this.abaControlador = this.abaIndex;
      },
      novaAbaRecente(abaKey) {
        // console.log(this.abaStorage);
        // this.abas = {
        //   ...this.abas,
        //   [abaKey]: this.abaStorage[abaKey],
        // };
        // const arrayKeys = Object.keys(this.abas);
        // const key = parseInt(this.getKeyByValue(arrayKeys, abaKey));
        // this.abaIndex = key;
      }
    }
  }
</script>

<style>
  .gettingStartedCategoriesContainer {
    display: grid;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-rows: 25% minmax(min-content,auto) min-content;
    grid-template-columns: 1fr 6fr 1fr 6fr 1fr;
    grid-template-areas:
        ". header header header ."
        ". left-column . right-column ."
        ". footer footer footer .";
  }
  .gettingStartedCategoriesContainer>.header {
    grid-area: header;
    align-self: end;
  }
  .gettingStartedCategoriesContainer>* {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .gettingStartedCategoriesContainer>.categories-column-left {
    grid-area: left-column;
  }
  .gettingStartedCategoriesContainer>.categories-column-right {
    grid-area: right-column;
  }
  .gettingStartedCategoriesContainer>.footer {
    grid-area: footer;
    justify-self: center;
    text-align: center;
  }
  .tab-pane {
    height: 100%;
  }

  @media (max-width: 768px) {
    .gettingStartedContainer {
      padding: 12px 24px;
    }
    .gettingStartedCategoriesContainer>.header {
      display: none;
    }
    .gettingStartedCategoriesContainer {
      grid-template-rows: auto min-content minmax(min-content,auto) min-content;
      grid-template-columns: 1fr;
      grid-template-areas:
          "header"
          "left-column"
          "right-column"
          "footer";
    }
  }
</style>