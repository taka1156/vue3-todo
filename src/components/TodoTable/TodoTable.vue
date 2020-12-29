<template>
  <table class="todo-table">
    <thead>
      <tr>
        <th>Done</th>
        <th>開始日</th>
        <th>終了日</th>
        <th>タスク</th>
        <th>消去</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(todo, index) in todos" :key="`table_${index}`">
        <todo-table-item
          :todo="todo"
          @change-state-todo="changeStateTodo"
          @delete-todo="deleteTodo"
        />
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Todo } from '@/types/todo';
import { defineComponent, PropType, SetupContext } from 'vue';
import TodoTableItem from '../TodoTableItem/TodoTableItem.vue';

export default defineComponent({
  name: 'TodoTable',
  components: {
    'todo-table-item': TodoTableItem
  },
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      required: true
    }
  },
  emits: ['search-todo', 'change-state-todo', 'delete-todo'],
  setup(props, context: SetupContext) {
    const changeStateTodo = (index: number): void => {
      context.emit('change-state-todo', index);
    };

    const deleteTodo = (index: number) => {
      context.emit('delete-todo', index);
    };

    return { props, changeStateTodo, deleteTodo };
  }
});
</script>

<style scoped>
table {
  width: 70vw;
  padding: 0;
  margin: 0;
}

th,
td {
  border: 1px solid #41b883;
}

.todo-table {
  margin: 15px auto;
  border: 1px solid #41b883;
}
</style>
