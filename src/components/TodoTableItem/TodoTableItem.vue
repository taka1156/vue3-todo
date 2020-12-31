<template>
  <tr class="todo-table-item">
    <td>
      <base-input-checkbox
        :id="`todo_check${todo.index}`"
        :name="`todo_check${todo.index}`"
        :checked="todo.isDone"
        @change="changeStateTodo"
      />
    </td>
    <td>{{ formatDate(todo.startDate) }}</td>
    <td>{{ formatDate(todo.finishDate) }}</td>
    <td>{{ todo.task }}</td>
    <td>
      <base-btn @btn-click="deleteTodo">X</base-btn>
    </td>
  </tr>
</template>

<script lang="ts">
import { Todo } from '@/types/todo';
import { defineComponent, SetupContext, PropType } from 'vue';
import BaseBtn from '../BaseBtn/BaseBtn.vue';
import BaseInputCheckbox from '../BaseInputCheckbox/BaseInputCheckbox.vue';

export default defineComponent({
  name: 'TodoTableItem',
  components: {
    'base-btn': BaseBtn,
    'base-input-checkbox': BaseInputCheckbox
  },
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true
    }
  },
  emits: ['delete-todo', 'change-state-todo'],
  setup(props, context: SetupContext) {
    const formatDate = (date: Date | null): string => {
      /**
       * 日付の形式を変える
       */
      if (date == null) return '--/--/--';
      return new Date(date).toLocaleDateString();
    };

    const deleteTodo = () => {
      const { index } = props.todo;
      context.emit('delete-todo', index);
    };

    const changeStateTodo = () => {
      const { index } = props.todo;
      context.emit('change-state-todo', index);
    };

    return { props, formatDate, deleteTodo, changeStateTodo };
  }
});
</script>

<style scoped>
.todo-table-item:hover {
  background-color: #35495ebb;
}

td {
  border: 1px solid #41b883;
}
</style>
