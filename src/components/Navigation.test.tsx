import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { HashRouter } from "react-router-dom";
import data from "./../../package.json";

describe("Navigation Test", () => {
  test("Should show App title", () => {
    render(
      <HashRouter>
        <Navigation />
      </HashRouter>
    );
    expect(screen.getByText(/Kanban App/i)).toBeDefined();
  });
  test("Should show App version", () => {
    render(
      <HashRouter>
        <Navigation />
      </HashRouter>
    );
    expect(screen.getByText(data.version)).toBeDefined();
  });
});
