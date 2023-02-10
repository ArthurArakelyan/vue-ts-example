import { MutationTree } from 'vuex';

// Types
import { IAuthState } from '@/store/modules/auth/types';

const authMutations: MutationTree<IAuthState> = {
  setIsAuth(context, payload: boolean) {
    context.isAuth = payload;
  },
  setId(context, payload: string) {
    context.id = payload;
  },
};

export default authMutations;
