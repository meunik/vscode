<template>
  <div class="about">
    <!-- <div>
      <b-tabs content-class="mt-3">
        <b-tab no-body>
          <template #title>
            <b-spinner type="grow" small></b-spinner> Picture 1
          </template>
          <b-card-img bottom src="https://picsum.photos/600/200/?image=21" alt="Image 21"></b-card-img>
          <b-card-footer>Picture 1 footer</b-card-footer>
        </b-tab>

        <b-tab no-body title="Picture 2">
          <b-card-img bottom src="https://picsum.photos/600/200/?image=25" alt="Image 25"></b-card-img>
          <b-card-footer>Picture 2 footer</b-card-footer>
        </b-tab>

        <b-tab no-body title="Picture 3">
          <b-card-img bottom src="https://picsum.photos/600/200/?image=26" alt="Image 26"></b-card-img>
          <b-card-footer>Picture 3 footer</b-card-footer>
        </b-tab>

        <b-tab title="Text">
          <b-card-title>This tab does not have the <code>no-body</code> prop set</b-card-title>
          <b-card-text>
            Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
            consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex
            consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt
            veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua
            esse irure.
          </b-card-text>
        </b-tab>
      </b-tabs>
    </div> -->
    

    <div>
      <b-tabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <b-tab v-for="i in tabs" :key="'dyn-tab-' + i">
          <template #title>
            Tab {{ i }}
          <b-button class="float-right btn-sem-borda" @click="closeTab(i)">
            <font-awesome-icon :icon="['fas', 'xmark']" class="pl-1"/>
          </b-button>
          </template>
          Tab contents {{ i }}
          <b-button size="sm" variant="danger" class="float-right" @click="closeTab(i)">
            Close tab
          </b-button>
        </b-tab>

        <!-- New Tab Button (Using tabs-end slot) -->
        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
        </template>

        <!-- Render this if no tabs -->
        <template #empty>
          <div class="text-center text-muted">
            There are no open tabs<br>
            Open a new tab using the <b>+</b> button above.
          </div>
        </template>
      </b-tabs>
    </div>
    <div v-if="readme" v-html="readme" class="p-3"></div>
    <!-- <iframe src="https://meunik.github.io/vscode" style="width: 100%; height: 100%;"></iframe> -->
  </div>
</template>

<script>
  import { Model } from '../components/vscode/Model.js'
  import Perfil from '../components/vscode/github/Perfil'

  export default {
    mixins: [Model],
    components: {
      Perfil,
    },
    data() {
      return {
        tabs: [],
        tabCounter: 0
      }
    },
    methods: {
      closeTab(x) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i] === x) {
            this.tabs.splice(i, 1)
          }
        }
      },
      newTab() {
        this.tabs.push(this.tabCounter++)
      }
    }
  }
</script>