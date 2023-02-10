export interface ITodo {
  id: string;
  name: string;
  userId: string;
  completed: boolean;
  createdAt: number;
}

interface ITodoWithoutId {
  name: string;
  userId: string;
  completed: boolean;
  createdAt: number;
}

interface ITodoOptionalId {
  id?: string;
  name: string;
  userId: string;
  completed: boolean;
  createdAt: number;
}
