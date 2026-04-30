import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("increases, decreases and resets the counter", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    expect(screen.getByText("0")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /hækka/i }));
    expect(screen.getByText("1")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /minnka/i }));
    expect(screen.getByText("0")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /hækka/i }));
    await user.click(screen.getByRole("button", { name: /hækka/i }));
    expect(screen.getByText("2")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /endurstilla/i }));
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
