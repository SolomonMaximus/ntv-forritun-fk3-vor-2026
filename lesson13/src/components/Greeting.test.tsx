import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Greeting } from "./Greeting";

describe("Greeting", () => {
  it("shows greeting when user writes a name and submits", async () => {
    const user = useEvent.setup();

    render(<Greeting />);

    const input = screen.getByPlaceholderText("Skrifaðu nafn");
    const button = screen.getByRole("button", { name: /Senda/i });

    await user.type(input, "Alex");
    await user.click(button);

    expect(screen.getByText("Halló, Alex!")).toBeInTheDocument();
  });
});
