import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { fetchRandomQuote } from "@/lib/quotes";
import { QuoteCard } from "./QuoteCard";

vi.mock("@/lib/quotes", () => {
  return {
    fetchRandomQuote: vi.fn(),
  };
});

describe("QuoteCard", () => {
  it("fetches and displays a quote when the button is clicked", async () => {
    const user = userEvent.setup();

    vi.mocked(fetchRandomQuote).mockResolvedValue(
      "This is a random test quote.",
    );

    render(<QuoteCard />);

    await user.click(screen.getByRole("button", { name: /Sækja quote/i }));

    expect(
      await screen.findByText("This is a random test quote."),
    ).toBeInTheDocument();
  });

  it("displays an error message if fetching the quote fails", async () => {
    const user = userEvent.setup();

    vi.mocked(fetchRandomQuote).mockRejectedValue(
      new Error("Ekki tókst að sækja quote."),
    );

    render(<QuoteCard />);

    await user.click(screen.getByRole("button", { name: /Sækja quote/i }));

    expect(
      await screen.findByText("Ekki tókst að sækja quote."),
    ).toBeInTheDocument();
  });
});
