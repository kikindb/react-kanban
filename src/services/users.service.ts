import { User } from "../models/User";
import { userAdapter } from "../adapters/user.adapter";
const apiUrl = `${import.meta.env.VITE_API_URL}users`;

export async function getAllUsers(token: string, signal?: AbortSignal) {
  let userData: User[] = [];
  try {
    const res = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      signal: signal,
    });
    const data = await res.json();
    userData = data.map((user: any) => userAdapter(user));
  } catch (err: any) {
    if (err.name === "AbortError") {
      console.log("Aborted!");
      userData = [];
    }
    console.log(err);
  } finally {
    return userData;
  }
}
