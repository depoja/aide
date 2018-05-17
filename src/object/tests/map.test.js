import { map } from "../map";

describe("map", () => {
  it("works", () => {
    const obj = { a: 1, b: 2 };
    const mapped = map(obj, key => key.toUpperCase(), val => val * 100);
    expect(mapped).toEqual({ A: 100, B: 200 });
  });
});
