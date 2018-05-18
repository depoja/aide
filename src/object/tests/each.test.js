import { each, eachKey, eachValue } from "../each";

describe("eachKey", () => {
  it("works", () => {
    let keys = "";
    eachKey({ a: 1, b: 2 }, key => (keys += `_${key}`));

    expect(keys).toBe("_a_b");
  });
});

describe("eachValue", () => {
  it("works", () => {
    let sum;
    eachKey({ a: 1, b: 2 }, val => (sum += val));

    expect(sum).toBe(3);
  });
});
