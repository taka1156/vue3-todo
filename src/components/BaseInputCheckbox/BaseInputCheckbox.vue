<template>
  <input
    class="base-input-checkbox"
    :id="id"
    type="checkbox"
    :name="name"
    :checked="checked"
    @chenge="updateChecked"
  />
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType } from 'vue';

export default defineComponent({
  name: 'BaseInputCheckbox',
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    },
    name: {
      type: String as PropType<string>,
      required: true
    },
    checked: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  },
  emits: ['update:chceked'],
  setup(props, context: SetupContext) {
    const updateChecked = (e: Event) => {
      if (e.target instanceof HTMLInputElement) {
        context.emit('update:chceked', e.target.checked);
      }
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
