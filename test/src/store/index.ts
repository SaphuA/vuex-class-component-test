import Vue from 'vue';
import Vuex from 'vuex';
import { AthenaStore } from './athena';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    athena: AthenaStore.ExtractVuexModule(AthenaStore),
  },
});

export const vxm = {
  athena: AthenaStore.CreateProxy(store, AthenaStore) as AthenaStore,
};
