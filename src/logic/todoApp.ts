import { Todo } from 'src/types/todo';

class TodoApp {
  private static instance: TodoApp;
  todos: Todo[] = [];

  private constructor() {
    //...
  }

  public static getInstance(): TodoApp {
    if (this.instance == null) {
      this.instance = new TodoApp();
      return this.instance;
    } else {
      return this.instance;
    }
  }

  public getTodos = (): Todo[] => {
    return this.todos;
  };

  public addTodo = (inputTodo: Todo): boolean => {
    inputTodo.index = this.todos.length;
    this.todos.push(inputTodo);
    return true;
  };

  public changeState = (changeIndex: number): void => {
    this.todos[changeIndex].isDone = !this.todos[changeIndex].isDone;
  };

  private checkFoolControle = (isDone: boolean): boolean => {
    // すでに達成済み
    if (isDone) return true;
    // 達成してないのに消そうとしている
    const isOK = window.confirm(
      '終了していないタスクを削除しようとしています。\nよろしいですか?'
    );
    return isOK;
  };

  public deleteTodo = (deleteIndex: number): void => {
    const isDone = this.todos[deleteIndex].isDone;
    if (this.checkFoolControle(isDone)) {
      this.todos = this.todos.filter((todo, i) => deleteIndex !== i);
    }
  };

  public textSearchTodo = (searchText: string): Todo[] => {
    const FILTER_TODOS = this.todos.filter(
      todo => todo.task.indexOf(searchText) !== -1
    );

    if (FILTER_TODOS.length > 0) {
      return FILTER_TODOS;
    } else {
      return this.todos;
    }
  };
}

export { TodoApp };
