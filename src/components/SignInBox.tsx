import React, { useRef } from "react";
import Card from "../UI/Card";

export default function SignInBox() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const signInHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Card>
      <header>
        <h1>Sign In</h1>
      </header>
      <div className="form-container">
        <form onSubmit={signInHandler}>
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
