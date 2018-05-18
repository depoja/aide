import { map, mapValues, mapKeys } from "../map";

describe("map", () => {
  it("works", () => {
    const obj = { a: 1, b: 2 };
    const mapped = map(obj, key => key.toUpperCase(), val => val * 100);

    expect(mapped).not.toBe(obj);
    expect(mapped).toEqual({ A: 100, B: 200 });
  });
});

describe("mapKeys", () => {
  it("works", () => {
    const obj = { a: 1, b: 2 };
    const mapped = mapKeys(obj, key => key.toUpperCase());

    expect(mapped).not.toBe(obj);
    expect(mapped).toEqual({ A: 1, B: 2 });
  });
});

describe("mapValues", () => {
  it("works", () => {
    const obj = { a: 1, b: 2 };
    const mapped = mapValues(obj, val => val * 100);

    expect(mapped).not.toBe(obj);
    expect(mapped).toEqual({ a: 100, b: 200 });
  });
});
