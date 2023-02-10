import { Module } from 'vuex';

// Store
import authGetters from '@/store/modules/auth/getters';
import authMutations from '@/store/modules/auth/mutations';
import authActions from '@/store/modules/auth/actions';

// Types
import { IRootState } from '@/store/types';
import { IAuthState } from '@/store/modules/auth/types';

const authModule: Module<IAuthState, IRootState> = {
  namespaced: true,
  state() {
    return {
      isAuth: false,
      id: null,
    };
  },
  getters: authGetters,
  mutations: authMutations,
  actions: authActions,
};

export default authModule;
