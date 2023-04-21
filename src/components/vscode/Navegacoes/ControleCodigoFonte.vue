<template>
  <nav>
    <div class="px-3 d-flex align-items-center justify-content-between">
      <span class="explorador">CONTROLE DO CÓDIGO-FONTE</span>
      <Icone icone="tresPontos"/>
    </div>
    <Loader />

    <Pasta
      :aberto="true"
      texto="Diretório"
      class="pt-2 overflow-y-auto overflow-x-hidden d-flex flex-column"
      :primeiro="true"
    >
      <Pasta :aberto="true" texto="Github" :nivelIndentacao="1">
        <Pasta :aberto="true" texto="Perfil" :nivelIndentacao="2" :indentacaoSlot="true">
          <a
            href="#"
            @click="novaAba('perfil', perf)"
            class="link-laranja text-decoration-none"
          >
            <Icone icone="github" :completo="false">meunik</Icone>
          </a>
        </Pasta>
        <Pasta :aberto="true" texto="Repositórios Público" :nivelIndentacao="2" :indentacaoSlot="true">
          <span v-for="(repo, index) in repositorios" :key="index">
            <a
              href="#"
              v-if="repo && repo.language"
              @click="novaAba('explorador', repo)"
              class="link-menu text-decoration-none"
            >
              <Icone icone="github" :completo="false">{{`${repo.language} - ${repo.name}`}}</Icone>
            </a>
          </span>
        </Pasta>
      </Pasta>
    </Pasta>
  </nav>
</template>

<script>
  import Perfil from '@/components/vscode/github/Perfil';
  import { Model } from '@/components/vscode/Model.js';
  import Pasta from '@/components/vscode/Meio/Pasta.vue';
  import Icone from '@/assets/svg/Icone.vue';
  import Loader from '@/components/vscode/componets/Loader.vue';

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
