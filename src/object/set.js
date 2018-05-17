import { reduce } from "../array/reduce";
import { clone } from "../shared/clone";
import { isArr, isPlainObj } from "../shared/is";
import { parsePath } from "./path";

export const set = (obj, path, value) => {
  const cloned = clone(obj);
  const parsed = parsePath(path);

  return reduce(
    parsed,
    (result, key, i) => {
      if (i < parsed.length - 1) {
        const nextKey = parsed[i + 1];
        const currentVal = result[key];

        const objVal = isPlainObj(currentVal) ? currentVal : {};
        const arrVal = isArr(currentVal) ? currentVal : [];

        result[key] = typeof nextKey === "number" ? arrVal : objVal;
        return result[key];
      }

      result[key] = value;
      return cloned;
    },
    cloned
  );
};
