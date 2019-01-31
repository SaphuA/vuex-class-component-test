<template>
  <div id='app'>
    {{foo}}
    <button @click="change">Change</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { MutationMethod, ActionMethod } from 'vuex';
import { AthenaStore } from './store/athena';
import * as store from './store';

@Component
export default class extends Vue {
  // This type is required because the CreateProxy somehow resolves to any
  //                  |
  private athena: AthenaStore = AthenaStore.CreateProxy(this.$store, AthenaStore);

  get foo() { return this.athena.foo; }

  public change() {
    this.athena.setFoo('test');
  }

  public mounted() {
    console.log('Mounted:');
    console.log('VMX:');
    console.log(store.vmx);
    console.log('Athena:');
    console.log(this.athena);
  }
}
</script>

<style>
</style>
