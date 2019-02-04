import { VuexModule, mutation, action, getter, Module, getRawActionContext } from 'vuex-class-component';

@Module({ namespacedPath: 'athena/' })
export class AthenaStore extends VuexModule {
  @getter public foo = 'bar';

  @mutation
  public setFoo(value: string) {
    this.foo = value;
  }

  @action()
  public readUzovis() {
    return Promise.resolve();
  }
}
