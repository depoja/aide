import { compose } from "../compose";

describe("compose", () => {
  it("works", () => {
    const timesTwo = n => n * 2;
    const timesThree = n => n * 3;

    const timesSix = compose(timesTwo, timesThree);

    expect(timesSix(6)).toBe(36);
  });

  it("calls given functions rtl", () => {
    const fn1 = n => n + "_second";
    const fn2 = n => n + "_third";

    const fn = compose(fn1, fn2);

    expect(fn("first")).toBe("first_third_second");
  });
});
