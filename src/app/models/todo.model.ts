export interface Todo {
  id: string;
  title: string;
}

export interface Column {
  title: string;
  todos: Todo[];
}
