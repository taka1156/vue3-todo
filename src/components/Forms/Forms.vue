<template>
  <base-btn @btn-click="changeState">
    {{ state.status ? 'タスク追加' : 'タスク検索' }}
  </base-btn>
  <div v-if="!state.status">
    <add-todo-form @add-todo="addTodo" />
  </div>
  <div v-else>
    <search-todo-form @search-todo="searchTodo" />
  </div>
</template>

<script lang="ts">
import { Todo } from '@/types/todo';
import { defineComponent, SetupContext, reactive } from 'vue';
import BaseBtn from '../BaseBtn/BaseBtn.vue';
import AddTodoForm from '../Form/AddTodoForm/AddTodoForm.vue';
import SearchTodoForm from '../Form/SearchTodoForm/SearchTodoForm.vue';

type Forms = {
  status: boolean;
};

export default defineComponent({
  name: 'Forms',
  components: {
    'base-btn': BaseBtn,
    'add-todo-form': AddTodoForm,
    'search-todo-form': SearchTodoForm
  },
  emits: ['add-todo', 'search-todo'],
  setup(props, context: SetupContext) {
    const state = reactive<Forms>({
      status: false
    });

    const addTodo = (todo: Todo): void => {
      context.emit('add-todo', todo);
    };

    const searchTodo = (searchText: string): void => {
      context.emit('search-todo', searchText);
    };

    const changeState = (): void => {
      state.status = !state.status;
      searchTodo(''); // 初期化
    };

    return { state, changeState, addTodo, searchTodo };
  }
});
</script>
