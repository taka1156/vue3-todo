<template>
  <div class="base-input-text">
    <label class="base-input-text--label" :for="id">
      {{ labelText }}
    </label>
    <input :id="id" :type="type" :value="value" @input="updateInput" />
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType } from 'vue';

export default defineComponent({
  name: 'BaseInputText',
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    },
    labelText: {
      type: String as PropType<string>,
      required: true
    },
    type: {
      type: String as PropType<string>,
      required: true
    },
    value: {
      type: String as PropType<string>,
      required: true
    }
  },
  emits: ['input'],
  setup(props, context: SetupContext) {
    const updateInput = (e: Event): void => {
      if (e.target instanceof HTMLInputElement) {
        context.emit('input', e.target.value);
      }
    };
    return { updateInput, props };
  }
});
</script>

<style scoped>
.base-input-text {
  display: flex;
  flex-direction: column;
  margin: 1.5px;
}

.base-input-text--label {
  text-align: left;
}
</style>
