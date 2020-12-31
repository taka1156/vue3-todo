<template>
  <div>
    <base-errors :errors="state.errors" />
    <form class="add-todo-form" @submit.prevent="addTodo">
      <base-input-text
        :id="'startDate'"
        :label-text="'開始日'"
        :type="'date'"
        v-model:value="state.startDate"
      />
      <base-input-text
        :id="'finshDate'"
        :label-text="'終了日'"
        :type="'date'"
        v-model:value="state.finishDate"
      />
      <base-input-text
        :id="'task'"
        :label-text="'タスク'"
        :type="'text'"
        v-model:value="state.task"
      />
      <input class="add-todo-form__submit" type="submit" value="追加" />
    </form>
  </div>
</template>

<script lang="ts">
import { Todo } from 'src/types/todo';
import { defineComponent, SetupContext, reactive } from 'vue';
import BaseErros from '../../BaseErrors/BaseErros.vue';
import BaseInputText from '../../BaseInputText/BaseInputText.vue';

type AddTodo = {
  startDate: string;
  finishDate: string;
  task: string;
  errors: string[];
};

export default defineComponent({
  name: 'AddTodoForm',
  components: {
    'base-errors': BaseErros,
    'base-input-text': BaseInputText
  },
  emits: ['add-todo'],
  setup(props, context: SetupContext) {
    const state = reactive<AddTodo>({
      startDate: '',
      finishDate: '',
      task: '',
      errors: []
    });

    const stateInit = (): void => {
      state.startDate = '';
      state.finishDate = '';
      state.task = '';
    };

    const valdete = () => {
      const errors = [];
      if (state.startDate === '') {
        errors.push('開始日が入力されていません');
      }

      if (state.finishDate === '') {
        errors.push('終了日が入力されていません');
      }

      if (state.task === '') {
        errors.push('タスクが入力されていません');
      }
      state.errors = errors;
    };

    const addTodo = (): void => {
      valdete();
      if (state.errors.length === 0) {
        const tmp: AddTodo = { ...state };
        stateInit();
        const { startDate, finishDate, task } = tmp;
        const todo: Todo = {
          index: 0,
          startDate: new Date(startDate),
          finishDate: new Date(finishDate),
          task: task,
          isDone: false
        };
        context.emit('add-todo', todo);
      }
    };

    return { state, addTodo };
  }
});
</script>

<style scoped>
.add-todo-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  height: 25vh;
  padding: 10px;
  margin: 15px auto;
  border: 1px solid #41b883;
}

.add-todo-form__submit {
  margin: 0 auto;
  width: 80%;
}
</style>
