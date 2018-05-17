import { id } from "../id";

describe("id", () => {
  it("works with values", () => {
    expect(id(5)).toBe(5);
  });

  it("works with references", () => {
    const obj = {};
    expect(id(obj)).toBe(obj);
  });
});
