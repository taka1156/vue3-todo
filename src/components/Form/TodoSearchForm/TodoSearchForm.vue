<template>
  <form class="search-todo-form" @submit.prevent="searchTodo">
    <base-input-text
      :id="'searchText'"
      :label-text="'検索ワード'"
      :type="'text'"
      v-model:value="state.seachText"
    />
    <input class="search-todo-form__submit" type="submit" value="検索" />
  </form>
</template>

<script lang="ts">
import { defineComponent, SetupContext, reactive } from 'vue';
import BaseInputText from '../../BaseInputText/BaseInputText.vue';

type SearchTodo = {
  seachText: string;
};

export default defineComponent({
  name: 'SearchTodoForm',
  components: {
    'base-input-text': BaseInputText
  },
  emits: ['search-todo'],
  setup(props, context: SetupContext) {
    const state = reactive<SearchTodo>({
      seachText: ''
    });

    const searchTodo = (): void => {
      const { seachText } = state;
      context.emit('search-todo', seachText);
    };

    return { searchTodo, state };
  }
});
</script>

<style scoped>
.search-todo-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  height: 25vh;
  padding: 10px;
  margin: 15px auto;
  border: 1px solid #41b883;
}

.search-todo-form__submit {
  margin: 0 auto;
  width: 80%;
}
</style>
