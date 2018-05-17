import { parsePath } from "../path";

describe("parsePath", () => {
  it("works", () => {
    const path = "person.name['first']";
    expect(parsePath(path)).toEqual(["person", "name", "first"]);
  });

  it("parses number keys as numbers", () => {
    const path = "person.names[0]['first']";
    expect(parsePath(path)).toEqual(["person", "names", 0, "first"]);
  });
});
