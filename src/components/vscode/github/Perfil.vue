<template>
  <div class="mt-5">
    <hr class="mb-4">
    <b-row class="m-0 mr-1 mr-md-4">
      <b-col cols="12" md="4" class="p-3" style="top: -60px;">
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
          <img src="https://github.com/meunik/meunik/raw/output/github-contribution-grid-snake.svg" alt="Snake animation" style="max-width: 100%;">
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js'
  import Icone from '@/assets/svg/Icone.vue'

  export default {
    mixins: [Model],
    async created() {
      await this.$store.dispatch("Git/buscaPerfil");
      await this.$store.dispatch("Git/buscaReadmePerfil");
    },
    components: {
      Icone,
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
</style>