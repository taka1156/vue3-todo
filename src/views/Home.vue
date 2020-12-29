<template>
  <div>
    <div class="App-logo">
      <div class="triangle triangle--one"></div>
      <div class="triangle triangle--two"></div>
      <div class="triangle triangle--three"></div>
    </div>
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener">
      vue-cli documentation
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>

<style scoped>
a {
  color: #42b983;
}

.App-logo {
  animation: turn 2s linear forwards 1s;
  transform: rotateX(0deg);
  position: relative;
  height: 200px;
  width: 536px;
  margin: 0 auto;
  padding: 0;
}

.triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.triangle--one {
  margin: 0;
  padding: 0;
  top: 10px;
  left: 12vw;
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41b883;
}

.triangle--two {
  margin: 0;
  padding: 0;
  top: 70px;
  left: 14.6vw;
  opacity: 0;
  animation: opa 0.5s linear forwards 3s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495e;
}

.triangle--three {
  margin: 0;
  padding: 0;
  top: 130px;
  left: 17.3vw;
  opacity: 0;
  animation: godown 0.5s linear forwards 4s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid white;
}

@keyframes turn {
  100% {
    transform: rotateX(180deg);
  }
}

@keyframes godown {
  100% {
    opacity: 1;
    top: 130px;
  }
}

@keyframes opa {
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 480px) {
  .App-logo {
    height: 30vh;
    width: 90vh;
  }

  .triangle--one {
    top: 10px;
    left: 18vw;
  }

  .triangle--two {
    left: 28vw;
  }

  .triangle--three {
    top: 135px;
    left: 37.5vw;
  }

  @keyframes godown {
    100% {
      opacity: 1;
      top: 135px;
    }
  }
}
</style>
