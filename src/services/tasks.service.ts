import { Task, TaskStatus } from "../models/Task";

export const taskObj: Task = {
  id: "1",
  title: "Learn React JS",
  body: "Watch Udemy courses",
  author: "Enrique Dick",
  date: "08/08/1994",
  status: TaskStatus.done,
};

const taskObj2: Task = {
  id: "2",
  title: "Learn Redux",
  body: "Practice with a project",
  author: "Cristian Dick",
  date: "21/10/1999",
  status: TaskStatus.todo,
};

const taskObj3: Task = {
  id: "3",
  title: "Learn TypeScript",
  body: "Keep practicing",
  author: "Leonardo Dick",
  date: "16/01/2008",
  status: TaskStatus.doing,
};

const taskObj4: Task = {
  id: "4",
  title: "Learn Next.js",
  body: "React JS Framework",
  author: "Leonardo Dick",
  date: "16/07/2009",
  status: TaskStatus.todo,
};

const taskObj5: Task = {
  id: "5",
  title: "Learn Nest JS",
  body: "Node JS & TS FW",
  author: "Juan Dick",
  date: "16/08/2019",
  status: TaskStatus.todo,
};

export const tasksArray = [taskObj, taskObj2, taskObj3, taskObj4, taskObj5];

export function initLocalStorage(): void {
  if (localStorage.getItem("tasks") === null) saveTasks(tasksArray);
}

export function getTasks() {
  let tasksArr: Task[];
  if (localStorage.getItem("tasks") !== null) {
    tasksArr = JSON.parse(localStorage.getItem("tasks")!) as Task[];
  } else {
    tasksArr = tasksArray;
  }
  return tasksArr;
}

export function addTask(task: Task): void {
  const newTasks = getTasks();
  newTasks.push(task);
  saveTasks(newTasks);
  console.log("Task created");
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
