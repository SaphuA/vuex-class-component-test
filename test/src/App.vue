<template>
  <div id='app'>
    {{foo}}
    <button @click="change">Change</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { AthenaStore } from './store/athena';
import { vxm } from "./store";

@Component
export default class extends Vue {

  // ts-ignore is needed here cuz Vetur's type inference sucks.
  // Prefer vxm over this approach. Its scales and works better.
  // @ts-ignore                  
  private athena: AthenaStore = AthenaStore.CreateProxy(this.$store, AthenaStore);

  get foo() { return this.athena.foo; }

  public change() {
    this.athena.setFoo('test');
  }

  public mounted() {
    console.log('Mounted:');
    console.log('VMX:');
    console.log( vxm.athena );
    console.log('Athena:');
    console.log(this.athena);
  }
}
</script>

<style>
</style>
