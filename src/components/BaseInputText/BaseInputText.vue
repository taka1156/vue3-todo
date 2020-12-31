<template>
  <div class="base-input-text">
    <label class="base-input-text__label" :for="id">
      {{ labelText }}
    </label>
    <input
      class="base-input-text__input"
      :id="id"
      :type="type"
      :value="value"
      @input="updateInput"
    />
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
.base-input-text {
  display: flex;
  flex-direction: column;
  margin: 1.5px;
}

.base-input-text__label {
  text-align: left;
}

.base-input-text__input {
  width: 100%;
  font-size: 16px;
}
</style>
