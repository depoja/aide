import { get } from "../get";

describe("get", () => {
  it("works", () => {
    const obj = { person: { name: { first: "Bob" } } };
    const firstName = get(obj, "person.name['first']");

    expect(firstName).toEqual("Bob");
  });
});
