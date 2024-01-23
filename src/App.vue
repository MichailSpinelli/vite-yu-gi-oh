<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';

import { store } from './store.js';

  export default {
    data () {
      return {
        store
        
      };
    },
    components: {
      AppHeader,
      AppMain,
      AppFooter
    },
    methods: {
      getAllCards() {
        axios
        .get(this.store.baseUrl, {
          params : {
            name: this.store.searchName,
            archetype: this.store.searchArchetype,
          }
        })
        .then((response) => {
          console.log(response);
          this.store.cards = response.data.results;
        })
        .catch((error) => {
          this.store.cards = [];
        })
        .finally(() => {
          console.log('funziona?')
        });
        // prende le cards con axios dall'api e le mette in store.cards
      },
      //getAllArchs() {
        // prende gli archetypes con axios dall'api e le mette in store.archs
      //},
      //searchCards() {
        // cerca le card con l'archetype === store.selectedArch con l'api come param metti archetype = store.selectedArch
      //}
    },
    /*mounted() {
      // Chiamata axios e salva risultati in store.cards
      this.getAllCards()
      //this.getAllArchs()
    }*/
    
  }
</script>

<template>

  <AppHeader />
  <AppMain />
  <AppFooter />

</template>

<style lang="scss" scoped>
@use "assets/scss/main.scss" as *;
@import "assets/scss/partials/reset.scss";
</style>
