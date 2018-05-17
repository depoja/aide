import { curry } from "../curry";

describe("curry", () => {
  it("works", () => {
    const sum = (x, y, z) => x + y + z;
    const curried = curry(sum);

    expect(sum(1, 2, 3)).toBe(curried(1)(2)(3));
  });

  it("throws when no argument passed", () => {
    const curried = curry((a, b) => a + b);

    expect(() => curried()).toThrow();
  });
});
