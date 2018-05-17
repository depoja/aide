import { values } from "../values";

describe("values", () => {
  it("works", () => {
    expect(values({ a: 1, b: 2 })).toEqual([1, 2]);
  });
});
