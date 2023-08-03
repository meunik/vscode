<template>
  <div>
    <div class="d-flex justify-content-end px-4 gap-3" style="height: 26.5px;">
      <a href="#" class="btn-menu-vscode text-decoration-none noPrint" style="z-index: 2;" @click="impirmir"><Icone icone="impressora" /></a>
    </div>
    <hr class="mb-4">
    <b-row class="m-0 mr-1 mr-md-4 pb-2">
      <b-col cols="12" md="4" class="p-3" style="margin-top: -60px;">
        <div class="d-flex align-items-center justify-content-center mb-3">
          <img v-if="perfil.avatar_url" :src="perfil.avatar_url" alt="Foto de Perfil do GitHub" class="avatar-user">
        </div>
        <h4 class="m-0 ">Marcos Paulo <b class="vcard-username">Chagas da Silva</b></h4>
        <p class="vcard-username">@{{perfil.login}}</p>
        
        <Icone icone="localizacao">Rua Conselheiro Paulino, nº 358, apto 207, Rio de Janeiro RJ 21073-240</Icone>
        <Icone icone="email">
          <a href="mailto:marcostrab@hotmail.com" target="_blank" class="links onPrintNoUnderline">marcostrab@hotmail.com</a>
        </Icone>
        <Icone icone="linkedin">
          <a href="https://www.linkedin.com/in/marcospaulo505058185/" target="_blank" class="links onPrintNoUnderline">in/marcospaulo505058185</a>
        </Icone>
        <Icone icone="instagram">
          <a href="https://www.instagram.com/meunikmp" target="_blank" class="links onPrintNoUnderline">meunikmp</a>
        </Icone>
        <Icone icone="github" class="noPrint">
          <a href="https://github.com/meunik" target="_blank" class="links">Github</a>
        </Icone>
        <Icone icone="github" class="print">
          <a href="https://github.com/meunik" target="_blank" class="links onPrintNoUnderline">meunik</a>
        </Icone>
        
        <hr>

        <span class="mb-3 texto-sm">
          meunik 
          <b class="color-fg-muted">/</b> 
          MEUS APPS
          <b class="color-fg-muted">.aab</b>
        </span>
        <div class="noPrint">
          <a href="https://play.google.com/store/apps/details?id=com.meunik.meuTime" target="_blank" class="links link-app">
          <img src="https://play-lh.googleusercontent.com/oCMl-DXheVHkV54SkV9pbES5anQicadmK3ab0snA6LnmJZW9e_0SWWpaRDxvDQ2TyA4=w240-h480-rw" alt="Foto de Perfil do GitHub" class="app-icon">
          <div>
            <span class="app-text">Meu Time</span>
            <span class="app-text-sm">
              <Icone icone="GooglePlay" :tamanho="13">Google Play</Icone>
            </span>
          </div>
          </a>
        </div>
        <div class="print">
          <p><b class="texto-escuro">Meu Time:</b> <a href="https://play.google.com/store/apps/details?id=com.meunik.meuTime" target="_blank" class="links">https://play.google.com/store/apps/details?id=com.meunik.meuTime</a></p>
        </div>
        
        <hr>

        <span class="mb-3 texto-sm">
          meunik 
          <b class="color-fg-muted">/</b> 
          FORMAÇÃO ACADÊMICA
          <b class="color-fg-muted">.txt</b>
        </span>
        <div>
          <span>Formado em <i class="texto-fino">07/2022</i></span>
          <b class="texto-escuro">Sistema De Informação</b>
          <p>Universidade Estácio de Sá (Nova América) | Rio de Janeiro</p>

          <p><b class="texto-escuro">Matemática</b> | UERJ Maracanã</p>

          <span><b class="texto-escuro">Montagem E Manutenção De Micros E Redes</b> | Curso Control C</span>
        </div>
        
        <hr>

        <span class="mb-3 texto-sm">
          meunik 
          <b class="color-fg-muted">/</b> 
          HABILIDADES E COMPETÊNCIAS
          <b class="color-fg-muted">.html</b>
        </span>
        <b-row>
          <b-col>
            <div class="d-flex flex-column">
              <Icone icone="html5">HTML</Icone>
              <Icone icone="css3">CSS</Icone>
              <Icone icone="javaScript">JavaScript</Icone>
              <Icone icone="jquery">jQuery</Icone>
              <Icone icone="vue">Vue</Icone>
              <Icone icone="tailwind">Tailwind</Icone>
              <Icone icone="bootstrap">Bootstrap</Icone>
            </div>
          </b-col>
          <b-col>
            <div class="d-flex flex-column">
              <Icone icone="php">PHP</Icone>
              <Icone icone="laravel">Laravel</Icone>
              <Icone icone="mysql">MySQL</Icone>
              <Icone icone="gitStack">Git</Icone>
              <Icone icone="figma">Figma</Icone>
              <Icone icone="react">React Native</Icone>
            </div>
          </b-col>
        </b-row>
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
            <div class="d-flex gap-4 flex-wrap">
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
            <PHP/>, <Laravel/>, <Lumen/>, <MySQL/>, <HTML/>, <CSS/>, <JavaScript/>, <Vue/>, <Figma/>, <jQuery/>. No
            meu trabalho anterior desenvolvi um sistema de RH, utilizado por 72
            clínicas particulares espalhadas pelo Brasil, com mais de 12 mil
            funcionários inseridos no sistema. Também fiz um sistema para
            acompanhamento diário de diálises realizadas por 19 clínicas.
          </p>
        </div>

        <br>

        <div class="box p-3">
          <span class="mb-3 texto-sm">
            meunik 
            <b class="color-fg-muted">/</b> 
            HISTÓRICO PROFISSIONAL
            <b class="color-fg-muted">.txt</b>
          </span>
          <div>
            <span><i class="texto-fino">03/2022</i> - Atual</span>
            <span><b class="texto-escuro">SPDM</b> | Rio de Janeiro, Rio de Janeiro</span>
            <span>Analista de sistemas</span>
            <p>
              Trabalho Full Stack no desenvolvimento de sistemas para auxiliar a área da
              saúde do Município do Rio de Janeiro, na qual utilizo tecnologias como:
              <GIT/>, <Figma/>, <HTML/>, <CSS/>, <JavaScript/>, <Vue/> com <VueX/> e <BootstrapVue/>, <jQuery/>, <PHP/>(5.3 e 8), <Laravel/>, <MySQL/>.
            </p>
            
            <span><i class="texto-fino">06/2021</i> - <i class="texto-fino">02/2022</i></span>
            <span><b class="texto-escuro">Viva Rio</b> | Rio de Janeiro, Rio de Janeiro</span>
            <span>Assistente de Informação</span>
            <p>
              Desenvolvo sistemas web, na qual utilizo tecnologias como: <GIT/>, <PHP/>(5.3 e 8), <Laravel/> e <MySQL/>.
            </p>
            
            <span><i class="texto-fino">06/2019</i> - <i class="texto-fino">05/2021</i></span>
            <span><b class="texto-escuro">Desenvolvedor Web, B2Fly</b> | Rio de Janeiro, Rio de Janeiro</span>
            <span>Estagiário / Desenvolvedor Júnior</span>
            <p>
              Auxiliei no desenvolvimento de sistemas web, na qual utilizei tecnologias
              como: <HTML cinco/>, <CSS tres/>, <PHP/>(5.6 e 7), <Laravel/>, <Lumen/> e <MySQL/>.
            </p>
            
            <span><i class="texto-fino">04/2016</i> - <i class="texto-fino">05/2019</i></span>
            <span><b class="texto-escuro">22º Ofício De Notas - RJ</b> | Rio de Janeiro, Rio de Janeiro</span>
            <span>Auxiliar De Serviços Notariais</span>
            <span>
              Trabalhava em Atendimento ao cliente, lidando diretamente com
              documentos como DUT, Declarações, Comunicações de venda, Apostila
              de Haya e outros. Prestativamente auxiliava em assuntos gerais
              Informáticos, navegação em Browser, manutenção de micros, Word,
              planilhas de Excel e outros.
            </span>
          </div>
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
  import { Model } from '@/components/vscode/Model.js';
  import Icone from '@/assets/svg/Icone.vue';
  import { contributions } from '@/utils/contributions.js';
  // import { snakeGame } from '@/utils/snakeGame.js';
  import 'css-element-queries/src/ResizeSensor.js';

  import Laravel from '@/components/vscode/github/components/Laravel.vue';
  import PHP from '@/components/vscode/github/components/PHP.vue';
  import Lumen from '@/components/vscode/github/components/Lumen.vue';
  import MySQL from '@/components/vscode/github/components/MySQL.vue';
  import HTML from '@/components/vscode/github/components/HTML.vue';
  import CSS from '@/components/vscode/github/components/CSS.vue';
  import JavaScript from '@/components/vscode/github/components/JavaScript.vue';
  import Vue from '@/components/vscode/github/components/Vue.vue';
  import jQuery from '@/components/vscode/github/components/jQuery.vue';
  import BootstrapVue from '@/components/vscode/github/components/BootstrapVue.vue';
  import VueX from '@/components/vscode/github/components/VueX.vue';
  import GIT from '@/components/vscode/github/components/GIT.vue';
  import Figma from '@/components/vscode/github/components/Figma.vue';

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
      Laravel,
      PHP,
      Lumen,
      MySQL,
      HTML,
      CSS,
      JavaScript,
      Vue,
      jQuery,
      BootstrapVue,
      VueX,
      GIT,
      Figma,
    },
    methods: {
      tooltipsText(contribuicao) {
        if (contribuicao.contributionCount != 0) {
          return `${contribuicao.contributionCount} contribuição em ${this.$moment(contribuicao.date, 'YYYY-MM-DD').format('DD/MM/YYYY')}`
        } else {
          return `Nenhuma contribuição em ${this.$moment(contribuicao.date, 'YYYY-MM-DD').format('DD/MM/YYYY')}`
        }
      },
      impirmir() {
        window.print({ filename: 'Currículo - Marcos Paulo Chagas da Silva' });
      },
    },
    mounted() {
      contributions()
      // snakeGame()
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:wght@400;500;700&display=swap');
  .avatar-user {
    border-radius: 50% !important;
    width: 100%;
    border: 1px solid #7a7164 !important;
    box-shadow: 0 0 0 1px rgba(29, 32, 33, 0.1);
  }
  .app-icon {
    border-radius: 20% !important;
    width: 50px;
    height: 50px;
    box-shadow: 0 0 0 1px rgba(29, 32, 33, 0.1);
  }
  .link-app:hover .app-text {
    color: #fff;
  }
  .app-text {
    font-size: 20px;
    font-family: Righteous;
    line-height: 22px;
  }
  .app-text-sm {
    font-size: 12px;
    font-style: normal;
    line-height: 24px;
    color: #9b9285;
  }
  .link-app:hover .app-text-sm {
    color: #3f84e4;
  }
  .link-app {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .link-app:hover {
    text-decoration: none;
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
  .list-style-none {
    list-style-type: none;
  }
</style>