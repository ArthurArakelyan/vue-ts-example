import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// Modules
import authModule from '@/store/modules/auth';
import todoModule from '@/store/modules/todo';

// Types
import { IRootState } from './types';

const store = createStore<IRootState>({
  modules: {
    auth: authModule,
    todo: todoModule,
  },
  plugins: [createPersistedState()],
});

export default store;
