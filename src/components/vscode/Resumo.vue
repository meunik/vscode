<template>
  <div>
    <h4 class="m-0 ">Marcos Paulo <b class="vcard-username">Chagas da Silva</b></h4>
    <p class="vcard-username">@{{perfil.login}}</p>
    
    <Icone icone="localizacao">Rio de Janeiro/RJ</Icone>
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
    
    <hr class="my-1">
    <div class="mb-1 d-flex flex-column gap-2">
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
    </div>
    <div class="d-flex flex-column gap-2">
      <div class="noPrint">
        <a href="https://monobuilds.com.br/" target="_blank" class="links link-app">
        <img src="/logo-icon-mb.png" alt="Foto de Perfil do GitHub" class="app-icon">
        <div>
          <span class="app-text">Mono Builds</span>
          <span class="app-text-sm">
            <span>monobuilds.com.br</span>
          </span>
        </div>
        </a>
      </div>
    </div>
    <div class="print">
      <p><b class="texto-escuro">Mono Builds:</b> <a href="https://monobuilds.com.br/" target="_blank" class="links">https://monobuilds.com.br/</a></p>
    </div>
    <hr class="my-1">
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js';
  import Icone from '@/assets/svg/Icone.vue';
  import 'css-element-queries/src/ResizeSensor.js';

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