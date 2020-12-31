<template>
  <input
    class="base-input"
    :id="id"
    :name="name"
    :type="type"
    :value="value"
    @input="updateInput"
  />
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
    name: {
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
  emits: ['update:value'],
  setup(props, context: SetupContext) {
    const updateInput = (e: Event): void => {
      if (e.target instanceof HTMLInputElement) {
        context.emit('update:value', e.target.value);
      }
    };
    return { updateInput, props };
  }
});
</script>

<style scoped>
.base-input {
  width: 100%;
  font-size: 16px;
}
</style>
