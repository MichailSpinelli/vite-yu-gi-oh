<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

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

    },
    mounted() {
      // Chiamata axios e salva risultati in store.cards
    }
    
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


//main

.container{
  background-color: #D48F38;
  padding-top: 20px;
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 50px;
}

.card-container {
  background-color: white;
  padding: 10px;
}

.card {
  background-color: #D48F38;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
</style>
