export enum TaskStatus {
  todo,
  doing,
  done,
  deleted,
}

export interface Task {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  status: TaskStatus;
}
