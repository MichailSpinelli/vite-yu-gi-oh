<script>
//importo lo store
import { store } from '../store.js'

//importo axios
import axios from 'axios';

  export default {
    data () {
      return {
        store
      };
    },
    methods: {
      axios
    }
  }
</script>

<template>
      <main>
    <div class="container">
      <button>
        Alien
      </button>

      <div class="card-container">
        <ul class="card">
          <li v-for="(cards, index) in items" ::key="index" class="card-image">
            <img src="" alt="">
            {{  }}
          </li>
          <div>
            title
          </div>
          <div>
            type
          </div>
        </ul>
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>
</style>