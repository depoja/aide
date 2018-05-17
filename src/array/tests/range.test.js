import { range } from "../range";

describe("range", () => {
  it("generates a range", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  });

  it("swaps the arguments when the first is larger than the second", () => {
    expect(range(5, 1)).toEqual([1, 2, 3, 4]);
  });

  it("starts the range from 0 when given one argument", () => {
    expect(range(4)).toEqual([0, 1, 2, 3]);
  });
});
