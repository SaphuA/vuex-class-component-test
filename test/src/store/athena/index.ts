import Vue from 'vue';
import Vuex from 'vuex';
import { VuexModule, mutation, action, getter, Module, getRawActionContext } from 'vuex-class-component';

Vue.use(Vuex);

@Module({ namespacedPath: 'athena/' })
export class AthenaStore extends VuexModule {
  // Uncommenting this line causes the 'Cannot call a class as a function' error
  // @getter public foo = 'bar';

  // This getter is not accessible in the store
  public foo = 'bar';

  @mutation
  public setFoo(value: string) {
    this.foo = value;
  }
}
export const athena = AthenaStore.ExtractVuexModule(AthenaStore);
