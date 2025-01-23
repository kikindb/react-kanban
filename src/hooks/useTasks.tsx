import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Task } from '@/models/Task';
import { getTasks } from '@/services/tasks.service';
import { AnyAction } from '@reduxjs/toolkit';

export default function useTasks(): [Task[], boolean] {
  const authData = useSelector((state: AnyAction) => state.auth.authData);
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async (signal: AbortSignal) => {
    const res = await getTasks(authData.token, signal);
    console.log('useTasks()');
    console.log(res);
    setTasksList(res);
    setLoading(false);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getData(signal);

    return () => {
      console.log('Cancelling request...');
      controller.abort();
    };
  }, []);

  return [tasksList, loading];
}
