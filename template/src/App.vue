<template>
  <div class="app">
    <h5 :style="{textAligin: center}">Nothig here, but your imagination.</h5>
    <my-comp />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyComp from "./components/MyComp.vue";

export default Vue.extend({
  name: "app",
  components: {
    MyComp
  }
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: 'JetBrains Mono', Consolas, 'Courier New', monospace;
}
</style>
