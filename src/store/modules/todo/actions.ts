import { ActionTree } from 'vuex';

// Services
import { TodoService } from '@/services';

// Types
import { ITodoState } from '@/store/modules/todo/types';
import { IRootState } from '@/store/types';
import { ITodo, ITodoOptionalId, ITodoWithoutId } from '@/types';

const todoActions: ActionTree<ITodoState, IRootState> = {
  async getTodos(context) {
    try {
      const userId = context.rootGetters['auth/id'];

      if (!userId) {
        throw new Error('Something went wrong');
      }

      const response = await TodoService.getTodos(userId);

      context.commit('setTodos', response);

      return response;
    } catch (e) {
      console.log(e);
    }
  },
  async addTodo(context, payload: string) {
    try {
      const userId = context.rootGetters['auth/id'];

      if (!userId) {
        throw new Error('Something went wrong');
      }

      const data: ITodoWithoutId = {
        name: payload,
        userId,
        completed: false,
        createdAt: Date.now(),
      };

      const response = await TodoService.addTodo(data);

      const responseData: ITodo = {
        ...data,
        id: response.id,
      };

      context.commit('addTodo', responseData);

      return responseData;
    } catch (e) {
      console.log(e);
    }
  },
  async editTodo(context, payload: ITodo) {
    try {
      const data: ITodoOptionalId = {
        ...payload,
      };

      delete data.id;

      await TodoService.editTodo(payload.id, data);

      data.id = payload.id;

      context.commit('changeTodo', data);

      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async deleteTodo(context, payload: string) {
    try {
      await TodoService.deleteTodo(payload);

      context.commit('deleteTodo', payload);

      return payload;
    } catch (e) {
      console.log(e);
    }
  },
};

export default todoActions;
