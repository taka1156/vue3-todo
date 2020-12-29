<template>
  <div>
    <h1>This is an about page</h1>
    <forms @add-todo="addTodo" @search-todo="searchTodo" />
    <todo-table
      :todos="state.todos"
      @change-state-todo="changeStateTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Forms from '@/components/Forms/Forms.vue';
import TodoTable from '@/components/TodoTable/TodoTable.vue';
import { TodoApp } from '@/logic/todoApp.ts';
import { Todo } from '@/types/todo';

const app = TodoApp.getInstance();

type TodoAppState = {
  todos: Todo[];
};

export default defineComponent({
  name: 'Todo',
  components: {
    forms: Forms,
    'todo-table': TodoTable
  },
  setup() {
    const state = reactive<TodoAppState>({
      todos: []
    });
    const addTodo = (todo: Todo): void => {
      app.addTodo(todo);
      state.todos = [...app.getTodos()];
    };

    const searchTodo = (searchText: string): void => {
      state.todos = [...app.textSearchTodo(searchText)];
    };

    const changeStateTodo = (index: number): void => {
      app.changeState(index);
      state.todos = [...app.getTodos()];
    };

    const deleteTodo = (index: number): void => {
      app.deleteTodo(index);
      state.todos = [...app.getTodos()];
    };

    return { state, addTodo, searchTodo, changeStateTodo, deleteTodo };
  }
});
</script>
