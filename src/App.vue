<template>
  <div id="bg">
    <div id="app">
      <navigation :routes="routes" />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from '@/components/Navigation/Navigation.vue';
import { routes } from '@/constants/index.ts';

export default defineComponent({
  components: {
    navigation: Navigation
  },
  setup() {
    return { routes };
  }
});
</script>

<style>
#bg {
  padding: 0;
  margin: 0;
  height: 99vh;
  width: 99vw;
}

#app {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
