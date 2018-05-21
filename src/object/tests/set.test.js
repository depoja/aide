import { get } from "../get";
import { set } from "../set";

describe("set", () => {
  it("works", () => {
    const obj = {
      a: 1,
      b: [1, 2, 3],
      c: { d: [{ e: 1, f: [1, 2, 3] }, { e: 2 }] }
    };

    const tests = {
      a: 1,
      b: [1, 2, 3],
      "c.d[0]['e']": 1,
      "c.d[0].e": 1,
      "c.d[0].e.f[1]": 3
    };

    for (let path in tests) {
      const result = set(obj, path, tests[path]);
      expect(get(result, path)).toEqual(tests[path]);
    }
  });
});
