import { keys } from "../keys";

describe("keys", () => {
  it("works", () => {
    expect(keys({ a: 1, b: 2 })).toEqual(["a", "b"]);
  });
});
