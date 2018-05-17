import { map } from "../map";

describe("map", () => {
  it("works", () => {
    const double = map([1, 3, 6], n => n * 2);
    expect(double).toEqual([2, 6, 12]);
  });
});
