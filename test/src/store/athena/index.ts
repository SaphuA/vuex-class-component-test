import Vue from 'vue';
import Vuex from 'vuex';
import { VuexModule, mutation, action, getter, Module, getRawActionContext } from 'vuex-class-component';

Vue.use(Vuex);

@Module({ namespacedPath: 'athena/' })
export class AthenaStore extends VuexModule {
  // This works now.
  @getter public foo = 'bar';

  /* 
   * private foo = 'bar'; This is not a getter. 
   * It is just a state and cannot be accessible in your Vue Component. 
   */

  @mutation
  public setFoo(value: string) {
    this.foo = value;
  }
}

