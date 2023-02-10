import { Module } from 'vuex';

// Store
import todoGetters from '@/store/modules/todo/getters';
import todoMutations from '@/store/modules/todo/mutations';
import todoActions from '@/store/modules/todo/actions';

// Types
import { ITodoState } from '@/store/modules/todo/types';
import { IRootState } from '@/store/types';

const module: Module<ITodoState, IRootState> = {
  namespaced: true,
  state() {
    return {
      todos: [],
    };
  },
  getters: todoGetters,
  mutations: todoMutations,
  actions: todoActions,
};

export default module;
