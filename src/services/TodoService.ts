import { where } from 'firebase/firestore';

// Services
import FirestoreService from './FirestoreService';

// Types
import { ITodo, ITodoWithoutId } from '@/types';

class TodoService {
  private static path = 'todos';

  static getTodos(userId: string) {
    return FirestoreService.get<ITodo>(
      this.path,
      where('userId', '==', userId),
    );
  }

  static getTodo(id: string) {
    return FirestoreService.getDoc<ITodo>(this.path, id);
  }

  static addTodo(todo: ITodoWithoutId, id?: string) {
    return FirestoreService.add<ITodoWithoutId>(this.path, todo, id);
  }

  static editTodo(id: string, todo: ITodoWithoutId) {
    return FirestoreService.edit<ITodoWithoutId>(this.path, todo, id);
  }

  static deleteTodo(id: string) {
    return FirestoreService.delete(this.path, id);
  }
}

export default TodoService;
