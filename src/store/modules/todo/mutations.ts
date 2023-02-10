import { MutationTree } from 'vuex';

// Types
import { ITodoState } from '@/store/modules/todo/types';
import { ITodo } from '@/types';

const todoMutations: MutationTree<ITodoState> = {
  setTodos(state, payload: ITodo[]) {
    state.todos = payload;
  },
  addTodo(state, payload: ITodo) {
    state.todos.push(payload);
  },
  changeTodo(state, payload: ITodo) {
    state.todos = state.todos.map((todo) => todo.id === payload.id ? {
      ...todo,
      ...payload
    } : todo);
  },
  deleteTodo(state, payload: string) {
    state.todos = state.todos.filter((todo) => todo.id !== payload);
  },
};

export default todoMutations;
