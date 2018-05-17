import { sort } from "../sort";

describe("sort", () => {
  it("works", () => {
    const sorted = sort([22, 33, 13]);
    expect(sorted).toEqual([13, 22, 33]);
  });
});
