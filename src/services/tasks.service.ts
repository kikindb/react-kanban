import { Task, TaskStatus } from '@/models/Task';

export const taskObj: Task = {
  id: '1',
  title: 'Learn React JS',
  body: 'Watch Udemy courses',
  author: 'Enrique Dick',
  createdAt: '08/08/1994',
  status: TaskStatus.done,
};

const apiUrl = `${import.meta.env.VITE_API_URL}task`;

export async function getTasks(token: string, signal?: AbortSignal) {
  let tasksArr: Task[] = [];

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      signal: signal,
    });
    const data = await response.json();
    tasksArr = data;
  } catch (error) {
    tasksArr = [];
    console.error(error);
  } finally {
    return tasksArr;
  }
}

export async function saveTask(task: Task, token: string) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify({
        title: task.title,
        body: task.body,
        author: task.author,
        status: task.status,
      }),
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function patchTask(task: Task, token: string) {
  try {
    const response = await fetch(`${apiUrl}/${task.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify({
        title: task.title,
        body: task.body,
        author: task.author,
        status: task.status,
      }),
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
