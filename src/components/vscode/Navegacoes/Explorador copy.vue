<template>
  <nav>
    <div class="px-3 d-flex align-items-center justify-content-between">
      <span class="explorador">EXPLORADOR</span>
      <Icone icone="tresPontos"/>
    </div>
    <Loader />

    <Pasta
      :aberto="true"
      texto="Diretório"
      class="pt-2 overflow-y-auto overflow-x-hidden d-flex flex-column"
      :primeiro="true"
    >
      <Pasta :aberto="true" texto="Profissional" :nivelIndentacao="1">
        <Pasta :aberto="false" texto="github" :nivelIndentacao="2">
          <span v-for="(repo, index) in repositorios" :key="index">
            <div class="link-menu-hover" :style="`padding-left: 2.5rem;`">
              <a
                href="#"
                v-if="repo && repo.language"
                @click="novaAba('explorador', repo)"
                :class="`link-menu text-decoration-none ${linkAtivo(repo.name)}`"
              >
                <Icone icone="github" :completo="false">{{`${repo.language} - ${repo.name}`}}</Icone>
              </a>
            </div>
          </span>
        </Pasta>
        <div class="link-menu-hover" :style="`padding-left: 1.5rem;`">
          <a
            href="#"
            @click="novaAba('curriculo', perf)"
            :class="`link-laranja text-decoration-none ${linkAtivo('curriculo')}`"
          >
            <Icone icone="github" :completo="false">Currículo</Icone>
          </a>
        </div>
      </Pasta>
      <Pasta :aberto="true" texto="Pessoal" :nivelIndentacao="1">
        <div class="link-menu-hover" :style="`padding-left: 1.5rem;`">
          <a
            href="#"
            @click="novaAba('setup')"
            :class="`link-menu text-decoration-none ${linkAtivo('setup')}`"
          >
            <Icone icone="monitor" :tamanho="16" :completo="false">Setup</Icone>
          </a>
        </div>
        <div class="link-menu-hover" :style="`padding-left: 1.5rem;`">
          <a
            href="#"
            @click="novaAba('fotos')"
            :class="`link-menu text-decoration-none ${linkAtivo('fotos')}`"
          >
            <Icone icone="camera" :completo="false">Fotos</Icone>
          </a>
        </div>
        <div class="link-menu-hover" :style="`padding-left: 1.5rem;`">
          <a
            href="#"
            @click="novaAba('teste')"
            :class="`link-menu text-decoration-none ${linkAtivo('teste')}`"
          >
            <Icone icone="circulo" :completo="false">Teste</Icone>
          </a>
        </div>
      </Pasta>
    </Pasta>
  </nav>
</template>

<script>
  import Perfil from '@/components/vscode/github/Perfil';
  import { Model } from '@/components/vscode/Model.js';
  import Pasta from '@/components/vscode/Meio/Pasta.vue';
  import Icone from '@/assets/svg/Icone.vue';
  import Loader from '@/components/vscode/components/Loader.vue';
  import { camelCase } from '@/utils/lodash.js';

  export default {
    mixins: [Model],
    components: {
      Perfil,
      Pasta,
      Icone,
      Loader,
    },
    data() {
      return {
        perf: Perfil
      }
    },
  }
</script>
