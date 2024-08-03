import { describe, it, expect } from "vitest";
import { reverseString } from "../src/utils/reverseString";

describe("reverseString", () => {
  it("should return true for reverseString", () => {
    expect(reverseString("tamat")).toBe(true);
  });

  it("should return false for reverseString", () => {
    expect(reverseString("hello world")).toBe(false);
  });
});
