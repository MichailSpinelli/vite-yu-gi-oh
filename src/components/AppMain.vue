<script>
//importo lo store
import { store } from '../store.js'


  export default {
    data () {
      return {
        store
      };
    },
    methods: {
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
        <div class="card"
        v-for="(archetype, i) in store.cards"
        :key="i">
        
        </div>
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>
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