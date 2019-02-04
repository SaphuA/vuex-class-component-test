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
import { vxm } from './store';

@Component
export default class extends Vue {
  get foo() { return vxm.athena.foo; }

  public change() {
    vxm.athena.setFoo('test');
  }

  public mounted() {
    console.log(vxm.athena);

    // UNCOMMENTING THIS LINE CAUSES ERRORS
    // vxm.athena.readUzovis();
  }
}
</script>

<style>
</style>
