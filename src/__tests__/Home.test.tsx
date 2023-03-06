import { expect, describe, it } from "vitest";
import { render, screen, within } from "@testing-library/react";

import Home from "../pages";

describe("Home", () => {
  it("renders correctly", () => {
    render(<Home />);
    const main = within(screen.getByRole("main"));
    expect(main.getByRole("heading", { level: 1 })).toBeDefined();
    expect(main.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Generate your next Resume/cover-letter using chatGPT",
    );
    screen.getAllByRole("link").forEach((link) => {
      expect(link).toHaveAttribute("href");
    });
  });
});
