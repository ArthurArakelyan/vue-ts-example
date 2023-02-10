import { ActionTree } from 'vuex';

// Services
import { AuthService } from '@/services';

// Types
import { IAuthState, ILoginPayloadData, ISignupPayloadData } from '@/store/modules/auth/types';
import { IRootState } from '@/store/types';

const authActions: ActionTree<IAuthState, IRootState> = {
  async login(context, payload: ILoginPayloadData) {
    try {
      const { email, password } = payload;

      const response = await AuthService.login(email, password);

      context.commit('setIsAuth', true);
      context.commit('setId', response.user.uid);

      return response;
    } catch (e) {
      console.log(e);
    }
  },
  async signup(context, payload: ISignupPayloadData) {
    try {
      const { email, password } = payload;

      const response = await AuthService.signup(email, password);

      context.commit('setIsAuth', true);
      context.commit('setId', response.user.uid);

      return response;
    } catch (e) {
      console.log(e);
    }
  },
  updateAuth(context) {
    context.commit('setIsAuth', AuthService.isAuth());
    context.commit('setId', AuthService.userId());
  },
};

export default authActions;
