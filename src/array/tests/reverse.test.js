import { reverse } from "../reverse";

describe("reverse", () => {
  it("works", () => {
    const sorted = reverse([22, 33, 13]);
    expect(sorted).toEqual([13, 33, 22]);
  });
});
