// store.js
//sto importando la 'reattività' da vue

import { reactive } from 'vue';

//sto dando modo di utilizzare nel resto del codice lo store

export const store = reactive({
  baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
  searchName: '',
  searchArchetype: '',
  cards: []
});