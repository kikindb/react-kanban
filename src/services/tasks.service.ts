import { Task, TaskStatus } from "../models/Task";

const taskObj: Task = {
  id: "1",
  title: "Title 1",
  body: "lorem ipsum",
  author: "Enrique Dick",
  date: "08/08/1994",
  status: TaskStatus.todo,
};

const taskObj2: Task = {
  id: "2",
  title: "Title 2",
  body: "lorem ipsum2",
  author: "Cristian Dick",
  date: "21/10/1999",
  status: TaskStatus.todo,
};

const taskObj3: Task = {
  id: "3",
  title: "Title 3",
  body: "lorem ipsum3",
  author: "Leonardo Dick",
  date: "16/01/2008",
  status: TaskStatus.todo,
};

const taskObj4: Task = {
  id: "4",
  title: "Title 4",
  body: "lorem ipsum4",
  author: "Leonardo Dick",
  date: "16/07/2009",
  status: TaskStatus.done,
};

const tasksArray = [taskObj, taskObj2, taskObj3, taskObj4];

export function getTasks() {
  return tasksArray;
}
