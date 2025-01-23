import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllUsers } from '@/services/users.service';
import { AuthData } from '@/models/Auth';
import { AnyAction } from '@reduxjs/toolkit';
import { User } from '@/models/User';

const useFetchUsers = () => {
  const isAuth = useSelector(
    (state: AnyAction) => state.auth.authData
  ) as AuthData;
  const [users, setUsers] = useState<User[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  const getUsers = async (signal: AbortSignal) => {
    try {
      const usersRes = await getAllUsers(isAuth.token, signal);
      console.log(usersRes);
      if (usersRes.length > 0) {
        setUsers(usersRes);
        setIsFetching(false);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getUsers(signal);
    return () => {
      controller.abort();
    };
  }, []);

  return { users, isFetching };
};

export default useFetchUsers;
