import { GetterTree } from 'vuex';

// Types
import { ITodoState } from '@/store/modules/todo/types';
import { IRootState } from '@/store/types';

const todoGetters: GetterTree<ITodoState, IRootState> = {
  todos(state) {
    return state.todos;
  },
  hasTodos(state) {
    return !!state.todos.length;
  },
};

export default todoGetters;
