import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import LoginBox from "./LoginBox";
import { Provider } from "react-redux";
import store from "../store";

describe("LoginBox Tests", () => {
  it("should display login title", () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <LoginBox />
        </HashRouter>
      </Provider>
    );
    expect(screen.getByRole("heading")).toBeDefined();
    expect(screen.getByText(/Welcome!/i)).toBeDefined();
  });

  it("should display email input", () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <LoginBox />
        </HashRouter>
      </Provider>
    );
    expect(screen.getByTestId("usernameInput")).toBeDefined();
  });

  it("should display password input", () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <LoginBox />
        </HashRouter>
      </Provider>
    );
    expect(screen.getByTestId("passwordInput")).toBeDefined();
  });

  it("should display submit button", () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <LoginBox />
        </HashRouter>
      </Provider>
    );
    expect(screen.getByTestId("submitButton")).toBeDefined();
  });
});
