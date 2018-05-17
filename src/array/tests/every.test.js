import { every } from "../every";

describe("every", () => {
  it("works", () => {
    const ltThree = every([0, 3, 1], el => el < 3);
    expect(ltThree).toBe(false);
  });
});
