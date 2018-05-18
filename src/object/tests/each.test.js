import { each, eachKey, eachValue } from "../each";

describe("each", () => {
  it("works", () => {
    let result = "";
    each({ a: 1, b: 2 }, key => (result += key), val => (result += `:${val};`));

    expect(result).toBe("a:1;b:2;");
  });
});

describe("eachKey", () => {
  it("works", () => {
    let keys = "";
    eachKey({ a: 1, b: 2 }, key => (keys += `_${key}`));

    expect(keys).toBe("_a_b");
  });
});

describe("eachValue", () => {
  it("works", () => {
    let sum = 0;
    eachValue({ a: 1, b: 2 }, val => (sum += val));

    expect(sum).toBe(3);
  });
});
