import Vue from 'vue';
import Vuex from 'vuex';
import { athena, AthenaStore } from './athena';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    athena,
  },
});

//            This cast is required so the type can be resolved in App.vue
export const vmx = { //                                      |
  athena: AthenaStore.CreateProxy(store, AthenaStore) as AthenaStore,
};
