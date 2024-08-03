import { describe, it, expect, vi } from "vitest";
import { fishBash } from "../src/utils/fishBash";

describe("fishBash", () => {
  it("should print the correct output", () => {
    const consoleLogSpy = vi.spyOn(console, "log");

    fishBash(15);

    const expected = [
      [1],
      [2],
      ["fish"],
      [4],
      ["bash"],
      ["fish"],
      [7],
      [8],
      ["fish"],
      ["bash"],
      [11],
      ["fish"],
      [13],
      [14],
      ["fish bash"],
    ];

    expected.forEach((value, index) => {
      expect(consoleLogSpy).toHaveBeenNthCalledWith(index + 1, ...value);
    });

    consoleLogSpy.mockRestore();
  });
});
