<template>
  <div id='app'>
    Val1: {{val1}}
    <br />
    <button @click="m">
      Mutate data
    </button><br />
    <br />
    Val2: {{val2}}
    <br />
    <button @click="f">
      Fetch data
    </button><br />

    <p>{{error || ""}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { MutationMethod, ActionMethod } from 'vuex';
import { vxm } from './store';

@Component
export default class extends Vue {
  public error = '';

  get val1() { return vxm.athena.val1; }
  get val2() { return vxm.athena.val2; }

  public m() {
    vxm.athena.setVal1('hello world');

  }
  public async f() {
    this.error = '';
    try {
      await vxm.athena.myAction();
    } catch (e) {
      this.error = e;
    }
  }
}
</script>

<style>
p {
  color: red;
}
</style>
