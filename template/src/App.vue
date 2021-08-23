<template>
  <div class="app">
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

<style lang="scss"></style>
