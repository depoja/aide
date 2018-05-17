import { each } from "../each";

describe("each", () => {
  it("works", () => {
    let sum = 0;
    each([2, 5, 6], n => {
      sum += n;
    });

    expect(sum).toBe(13);
  });
});
