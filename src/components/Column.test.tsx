import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Column from "./Column";

describe("Column tests", () => {
  it("should show title", () => {
    render(
      <HashRouter>
        <Column title="TitleOfColumn" color="red" id="1" />
      </HashRouter>
    );
    expect(screen.getByText(/TitleOfColumn/i));
  });
});
