import { describe, expect, it } from "vitest";
import { add } from "./math";

describe("add", () => {
  it("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("handles negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("adds positive and negative numbers", () => {
    expect(add(5, -2)).toBe(3);
  });

  it("adds zero correctly", () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });
});
