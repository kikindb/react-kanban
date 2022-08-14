import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import Card from "../UI/Card";

export default function SignInBox() {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const apiUrl = `${import.meta.env.VITE_APP_API_URL}users`;

  const signInHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
        }),
      });
      const data = await response.json();
      data.image = null;
      data.token = response.headers.get("x-auth-token");
      window.localStorage.setItem("authData", JSON.stringify(data));
      dispatch(authActions.login(data));

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <header>
        <h1>Sign In</h1>
      </header>
      <div className="form-container">
        <form onSubmit={signInHandler} autoComplete="new-password">
          <div className="input-container">
            <label htmlFor="nameInput">Name </label>
            <input
              type="text"
              id="nameInput"
              data-testid="nameInput"
              placeholder="Insert your name"
              ref={nameRef}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="usernameInput">Email </label>
            <input
              type="email"
              id="usernameInput"
              data-testid="usernameInput"
              placeholder="Insert your email"
              ref={emailRef}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="passwordInput">Password </label>
            <input
              type="password"
              id="passwordInput"
              data-testid="passwordInput"
              placeholder="Insert your password"
              ref={passwordRef}
              minLength={5}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="passwordConfirmInput">Confirm Password </label>
            <input
              type="password"
              id="passwordConfirmInput"
              data-testid="passwordConfirmInput"
              placeholder="Confirm your password"
              ref={passwordConfirmRef}
              minLength={5}
              required
            />
          </div>
          <div className="submit-container">
            <button type="submit" data-testid="submitButton">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
}
