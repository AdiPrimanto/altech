import { describe, it, expect } from "vitest";
import { sortAscending, sortDescending } from "../src/utils/sortArray";

describe("sortArray", () => {
  it("should return sorted array in ascending order", () => {
    expect(sortAscending([30, 10, 20])).toEqual([10, 20, 30]);
  });

  it("should return sorted array in descending order", () => {
    expect(sortDescending([30, 10, 20])).toEqual([30, 20, 10]);
  });
});
