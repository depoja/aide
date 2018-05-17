import { reduce } from "../reduce";

describe("reduce", () => {
  it("works", () => {
    const sum = reduce([5, 3, 1], (s, n) => s + n, 0);
    expect(sum).toBe(9);
  });
});
