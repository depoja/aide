import { some } from "../some";

describe("some", () => {
  it("works", () => {
    const gtThree = some([0, 4, 1], el => el > 3);
    expect(gtThree).toBe(true);
  });
});
