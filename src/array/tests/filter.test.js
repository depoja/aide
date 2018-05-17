import { filter } from "../filter";

describe("filter", () => {
  it("works", () => {
    const gtFive = filter([0, 22, 13], n => n > 5);
    expect(gtFive).toEqual([22, 13]);
  });
});
