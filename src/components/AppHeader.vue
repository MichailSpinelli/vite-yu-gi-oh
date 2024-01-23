<script>
//importo lo store

import { store } from '../store.js'

  export default {
    data () {
      return {
        store,
      };
    },
    methods: {

    }
  }
</script>

<template>
    <header>
    <div>
      logo
    </div>

    <div>
      <h1>
        Yu-Gi-Oh Api
      </h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
    @import "../assets/scss/partials/reset.scss";
</style>
