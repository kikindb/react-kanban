import { AnyAction } from "@reduxjs/toolkit";
import React, { FormEvent, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./../store/index";
import Card from "../UI/Card";
import "./LoginBox.css";

export default function LoginBox() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const isAuth = useSelector((state: AnyAction) => state.auth.isAuthenticated);

  const loginHandler = (event: FormEvent) => {
    event.preventDefault;
    dispatch(authActions.login());
  };

  return (
    <Card>
      <header className="form-header">
        <h1>Welcome!</h1>
      </header>
      {!isAuth && (
        <div className="form-container">
          <form onSubmit={loginHandler}>
            <div className="input-container">
              <label htmlFor="usernameInput" placeholder="Type your email">
                Email{" "}
              </label>
              <input
                type="email"
                id="usernameInput"
                data-testid="usernameInput"
                placeholder="Insert your email"
                ref={emailRef}
              />
            </div>
            <div className="input-container">
              <label htmlFor="passwordInput" placeholder="Type your password">
                Password{" "}
              </label>
              <input
                type="password"
                id="passwordInput"
                data-testid="passwordInput"
                placeholder="Insert your password"
                ref={passwordRef}
              />
            </div>
            <div className="submit-container">
              <button type="submit" data-testid="submitButton">
                Log In
              </button>
            </div>
          </form>
        </div>
      )}
    </Card>
  );
}
