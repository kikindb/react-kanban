import React from "react";
import Card from "../UI/Card";
import "./LoginBox.css";

export default function LoginBox() {
  return (
    <Card>
      <header className="form-header">
        <h1>Log In</h1>
      </header>
      <div className="form-container">
        <div className="input-container">
          <label htmlFor="usernameInput" placeholder="Type your email">
            Email{" "}
          </label>
          <input
            type="email"
            id="usernameInput"
            data-testid="usernameInput"
            placeholder="Insert your email"
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
          />
        </div>
        <div className="submit-container">
          <button type="submit" data-testid="submitButton">
            Log In
          </button>
        </div>
      </div>
    </Card>
  );
}
