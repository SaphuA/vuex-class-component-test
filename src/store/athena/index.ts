import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';
import { Client } from './client';

@Module({ namespacedPath: 'athena/' })
export class AthenaStore extends VuexModule {
  @getter public val1 = '';
  @getter public val2 = 0;

  @mutation
  public setVal1(value: string) {
    this.val1 = value;
  }

  @mutation
  public setVal2(value: number) {
    this.val2 = value;
  }

  @action()
  public async myAction() {
    if (this.val1 === '') {
      return Promise.reject('You should change val1 first');
    }

    const answer = await new Client().readData();
    this.setVal2(answer);
  }
}
