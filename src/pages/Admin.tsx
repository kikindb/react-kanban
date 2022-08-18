import { AnyAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AuthData } from "../models/Auth";
import { User } from "../models/User";
import { getAllUsers } from "../services/users.service";

export default function Admin() {
  const isAuth = useSelector(
    (state: AnyAction) => state.auth.authData
  ) as AuthData;
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async (signal: AbortSignal) => {
    try {
      const usersRes = await getAllUsers(isAuth.token, signal);
      console.log(usersRes);
      if (usersRes) {
        setUsers(usersRes);
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
      console.log("Cancelling request...");
      controller.abort();
    };
  }, []);

  return (
    <div>
      <header>
        <h2>Admin Dashboard</h2>
      </header>
      <main>
        <section>
          <h3>Users</h3>
          <ul>
            {users &&
              users.map((user, idx) => (
                <li key={user.id}>
                  {idx + 1}.- {user.name} - {user.email}
                </li>
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
