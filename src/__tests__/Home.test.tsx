import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";

import Home from "../pages";

test("Home", () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", { level: 1, name: /welcome to next\.js!/i }),
  ).toBeDefined();
});
