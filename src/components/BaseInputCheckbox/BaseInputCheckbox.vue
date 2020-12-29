<template>
  <input
    type="checkbox"
    class="base-input-checkbox"
    :value="isDone"
    @chenge="updateChecked"
  />
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType } from 'vue';

export default defineComponent({
  name: 'BaseInputCheckbox',
  props: {
    isDone: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  },
  setup(props, context: SetupContext) {
    const updateChecked = () => {
      context.emit('input');
    };

    return { updateChecked };
  }
});
</script>

<style scoped>
.base-input-checkbox {
  cursor: pointer;
}
</style>
