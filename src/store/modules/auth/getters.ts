import { GetterTree } from 'vuex';

// Types
import { IAuthState } from '@/store/modules/auth/types';
import { IRootState } from '@/store/types';

const authGetters: GetterTree<IAuthState, IRootState> = {
  isAuth(state) {
    return state.isAuth;
  },
  id(state) {
    return state.id;
  },
};

export default authGetters;
