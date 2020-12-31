<template>
  <div class="base-label-box">
    <label class="base-label-box__label" :for="id">
      {{ labelText }}
    </label>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BaseLabelBox',
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    },
    labelText: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    return { props };
  }
});
</script>

<style scoped>
.base-label-box {
  display: flex;
  flex-direction: column;
  margin: 1.5px;
}

.base-label-box__label {
  text-align: left;
}
</style>
