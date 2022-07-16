import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import LoginBox from "./LoginBox";

describe("LoginBox Tests", () => {
  it("should display login title", () => {
    render(
      <HashRouter>
        <LoginBox />
      </HashRouter>
    );
    expect(screen.getByRole("heading")).toBeDefined();
  });

  it("should display email input", () => {
    render(
      <HashRouter>
        <LoginBox />
      </HashRouter>
    );
    expect(screen.getByTestId("usernameInput")).toBeDefined();
  });

  it("should display password input", () => {
    render(
      <HashRouter>
        <LoginBox />
      </HashRouter>
    );
    expect(screen.getByTestId("passwordInput")).toBeDefined();
  });

  it("should display submit button", () => {
    render(
      <HashRouter>
        <LoginBox />
      </HashRouter>
    );
    expect(screen.getByTestId("submitButton")).toBeDefined();
  });
});
