<template>
  <nav>
    <ul className="nav">
      <li v-for="(route, index) in routes" :key="`nav_${index}`" class="nav__item">
        <router-link class="nav__item--link" :to="route.to">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Route } from '@/types';

export default defineComponent({
  name: 'Navigation',
  props: {
    routes: {
      type: Array as PropType<Route[]>,
      required: true
    }
  }
});
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

li {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  height: 5vh;
}

.nav__item {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  background-color: #35495e;
  border: 1px solid #41b883;
}

.nav__item--link {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 5vh;
  color: #41b883;
  text-decoration: none;
}
</style>
