<template>
  <div class="mt-5">
    <hr class="mb-4">
    <b-row class="m-0 mr-1 mr-md-4">
      <b-col cols="12" md="4" class="p-3" style="margin-top: -60px;">
        <div class="d-flex align-items-center justify-content-center mb-3">
          <img v-if="perfil.avatar_url" :src="perfil.avatar_url" alt="Foto de Perfil do GitHub" class="avatar-user">
        </div>
        <h4 class="m-0">{{perfil.name}}</h4>
        <p class="vcard-username">{{perfil.login}}</p>
        
        <Icone icone="localizacao">Rio de Janeiro</Icone>
        <Icone icone="email">
          <a href="mailto:marcostrab@hotmail.com" target="_blank" class="links">
            marcostrab@hotmail.com
          </a>
        </Icone>
        <Icone icone="linkedin">
          <a href="https://www.linkedin.com/in/marcospaulo505058185/" target="_blank" class="links">
            in/marcospaulo505058185
          </a>
        </Icone>
        <Icone icone="instagram">
          <a href="https://www.instagram.com/meunikmp" target="_blank" class="links">
            meunikmp
          </a>
        </Icone>
        <Icone icone="github">
          <a href="https://github.com/meunik/vscode" target="_blank" class="links">
            Github
          </a>
        </Icone>
      </b-col>

      <b-col cols="12" md="8" class="p-0">
        <div class="box pb-3">
          <span class="px-3 mt-3 texto-sm">
            meunik 
            <b class="color-fg-muted">/</b> 
            README
            <b class="color-fg-muted">.md</b>
          </span>
          <div v-html="readmePerfil" class="p-3"></div>
          <!-- <img src="https://github.com/meunik/meunik/raw/output/github-contribution-grid-snake.svg" alt="Snake animation" style="max-width: 100%;"> -->
    <div class="d-flex align-items-center justify-content-center">
      <div class="overflow-x-auto py-3">
        <table
          v-if="contributions"
          style="
            width: max-content;
            border-spacing: 4px;
            overflow: hidden;
            position: relative;
            border-collapse: separate;
          "
        >
          <tr v-for="(coluna, index) in colunas" :key="`coluna${index}`" :style="`height: ${contribTamanho}px`">
            <td
              v-for="(semanas, key) in contributions.weeks"
              :key="`semana${index}${key}`"
              :style="`
                width: ${contribTamanho}px;
                fill: #39d353;
                background-color: ${(semanas.contributionDays[index].contributionCount != 0)?semanas.contributionDays[index].color:'#ffffff0d'};
                outline: 1px solid #ffffff0d;
                border-radius: 2px;
              `"
              v-b-tooltip.hover.top="tooltipsText(semanas.contributionDays[index])" variant="primary"
            >
            </td>
          </tr>
        </table>
      </div>
    </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js'
  import Icone from '@/assets/svg/Icone.vue'
  import { contributions } from '@/utils/contributions.js'

  export default {
    mixins: [Model],
    async created() {
      await this.$store.dispatch("Git/buscaPerfil");
      await this.$store.dispatch("Git/buscaReadmePerfil");
      // await this.$store.dispatch("Git/buscaContributions");
    },
    data() {
      return {
        contribTamanho: 10,
        colunas: [0,1,2,3,4,5,6]
      }
    },
    components: {
      Icone,
    },
    methods: {
      tooltipsText(contribuicao) {
        if (contribuicao.contributionCount != 0) {
          return `${contribuicao.contributionCount} contribuição em ${this.$moment(contribuicao.date, 'YYYY-MM-DD').format('DD/MM/YYYY')}`
        } else {
          return `Nenhuma contribuição em ${this.$moment(contribuicao.date, 'YYYY-MM-DD').format('DD/MM/YYYY')}`
        }
      }
    },
    mounted() {
      contributions()
    },
  }
</script>

<style>
  .avatar-user {
    border-radius: 50% !important;
    width: 100%;
    border: 1px solid #7a7164 !important;
    box-shadow: 0 0 0 1px rgba(29, 32, 33, 0.1);
  }
  .vcard-username {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: #9b9285;
  }
  .box {
    /* background-color: #0a0e12; */
    background-color: #1d1e1994;
    border-color: #565656;
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid #565656 !important;
  }
  .color-fg-muted {
    color: #7a8490 !important;
  }
  .texto-sm {
    font-weight: 200;
    font-size: 12px;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    word-wrap: normal;
    border: 0;
  }
</style>