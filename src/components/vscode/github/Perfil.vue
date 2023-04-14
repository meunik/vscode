<template>
  <div class="mt-5">
    <hr class="mb-4">
    <b-row class="m-0 mr-1 mr-md-4">
      <b-col cols="12" md="4" class="p-3" style="margin-top: -60px;">
        <div class="d-flex align-items-center justify-content-center mb-3">
          <img v-if="perfil.avatar_url" :src="perfil.avatar_url" alt="Foto de Perfil do GitHub" class="avatar-user">
        </div>
        <h4 class="m-0 ">Marcos Paulo <b class="vcard-username">Chagas da Silva</b></h4>
        <p class="vcard-username">{{perfil.login}}</p>
        
        <Icone icone="localizacao">Rua Conselheiro Paulino, nº 358, apto 207, Rio de Janeiro RJ 21073-240</Icone>
        <Icone icone="email">
          <a href="mailto:marcostrab@hotmail.com" target="_blank" class="links">marcostrab@hotmail.com</a>
        </Icone>
        <Icone icone="linkedin">
          <a href="https://www.linkedin.com/in/marcospaulo505058185/" target="_blank" class="links">in/marcospaulo505058185</a>
        </Icone>
        <Icone icone="instagram">
          <a href="https://www.instagram.com/meunikmp" target="_blank" class="links">meunikmp</a>
        </Icone>
        <Icone icone="github" class="noPrint">
          <a href="https://github.com/meunik" target="_blank" class="links">Github</a>
        </Icone>
        <Icone icone="github" class="print">
          <a href="https://github.com/meunik" target="_blank" class="links">meunik</a>
        </Icone>
      </b-col>

      <b-col cols="12" md="8" class="p-0">
        <div class="box pb-3" id="box">
          <span class="px-3 mt-3 texto-sm">
            meunik 
            <b class="color-fg-muted">/</b> 
            README
            <b class="color-fg-muted">.md</b>
          </span>
          <!-- <div v-html="readmePerfil" class="p-3"></div> -->
          <div class="p-3"><h3>Olá sou Marcos Paulo 👋</h3>
            <ul>
              <li>💻 Atualmente trabalho como Full Stack (Vue + Laravel).</li>
            </ul>
            <div style="display: inline_block">
              <img align="center" alt="Marcos-php" title="PHP" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg">
              <img align="center" alt="Marcos-Laravel" title="Laravel" height="30" width="40" src="https://laravel.com/img/logomark.min.svg">
              <img align="center" alt="Marcos-MySQL" title="MySQL" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg">
              <img align="center" alt="Marcos-Vue" title="Vue" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg">
              <img align="center" alt="Marcos-HTML" title="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
              <img align="center" alt="Marcos-CSS" title="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
              <img align="center" alt="Marcos-Js" title="JS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
              <img align="center" alt="Marcos-jQuery" title="jQuery" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg">
              <img align="center" alt="Marcos-Vue" title="Vue" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg">
            </div>
          </div>
          <!-- <img src="https://github.com/meunik/meunik/raw/output/github-contribution-grid-snake.svg" alt="Snake animation" style="max-width: 100%;"> -->

          <div class="d-flex align-items-center justify-content-center noPrint">
            <div class="overflow-x-auto">
              <table
                id="tabela"
                v-if="contributions"
                style="
                  width: max-content;
                  border-spacing: 4px;
                  overflow: hidden;
                  position: relative;
                  border-collapse: separate;
                "
              >
                <tr v-for="(coluna, index) in colunas" :key="`coluna${index}`" :style="`height: ${contribTamanho}px`" class="testando">
                  <template v-for="(semanas, key) in contributions.weeks">
                    <td
                      v-if="key != (contributions.weeks.length - 1)"
                      :key="`semana${index}${key}`"
                      :style="`
                        width: ${contribTamanho}px;
                        fill: #39d353;
                        background-color: ${(semanas.contributionDays[index].contributionCount != 0)?semanas.contributionDays[index].color:'#ffffff0d'};
                        outline: 1px solid #ffffff0d;
                        border-radius: 2px;
                      `"
                      class="teste"
                      v-b-tooltip.hover.top="tooltipsText(semanas.contributionDays[index])" variant="primary"
                    >
                    </td>
                  </template>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <br>

        <div class="box p-3">
          <span class="mb-3 texto-sm">
            meunik 
            <b class="color-fg-muted">/</b> 
            RESUMO PROFISSIONAL
            <b class="color-fg-muted">.txt</b>
          </span>
          <p class="m-0">
            Tenho 4 anos de experiência em desenvolvedor web. Atualmente trabalho no
            Complexo Regulador do Município do Rio de Janeiro, no qual atuo como
            Full Stack no desenvolvimento de sistemas para auxiliar a área da saúde do
            Município do Rio de Janeiro. Já trabalhei e trabalho com as tecnologias:
            <span class="d-contents text-php">PHP</span>, <span class="d-contents text-laravel">Laravel</span>, <span class="d-contents text-lumen">Lumen</span>, <span class="d-contents text-mysql">MySQL</span>, <span class="d-contents text-html">HTML</span>, <span class="d-contents text-css">CSS</span>, <span class="d-contents text-javascript">JavaScript</span>, <span class="d-contents text-vue">Vue.js</span>, <span class="d-contents text-jquery">jQuery</span>. No
            meu trabalho anterior desenvolvi um sistema de RH, utilizado por 72
            clínicas particulares espalhadas pelo Brasil, com mais de 12 mil
            funcionários inseridos no sistema. Também fiz um sistema para
            acompanhamento diário de diálises realizadas por 19 clínicas.
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row class="m-0">
      <b-col cols="12" md="12">
        <span></span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js'
  import Icone from '@/assets/svg/Icone.vue'
  import { contributions } from '@/utils/contributions.js'
  // import { snakeGame } from '@/utils/snakeGame.js'
  import 'css-element-queries/src/ResizeSensor.js'

  export default {
    mixins: [Model],
    async created() {
      await this.$store.dispatch("Git/buscaPerfil");
      await this.$store.dispatch("Git/buscaReadmePerfil");
    },
    data() {
      return {
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
      // snakeGame()
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