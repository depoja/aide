import { sort } from "../sort";

describe("sort", () => {
  it("works with default compare", () => {
    const sorted = sort([22, 33, 13]);
    expect(sorted).toEqual([13, 22, 33]);
  });

  it("works with custom compare", () => {
    const largestFirst = (curr, next) => next - curr;

    const sorted = sort([22, 33, 13], largestFirst);
    expect(sorted).toEqual([33, 22, 13]);
  });
});
