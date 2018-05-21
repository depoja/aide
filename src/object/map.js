import { entries } from "./entries";
import { reduce } from "../array/reduce";
import { isPlainObj } from "../shared/is";
import { id } from "../function/id";

export const mapEntries = (
  obj = {},
  keyFn = () => {},
  valFn = () => {},
  recursive = false,
  parseJSON = false // TODO: unwrap JSON values
) =>
  reduce(
    entries(obj),
    (result, [key, val]) => ({
      ...result,
      [keyFn(key, val)]:
        recursive && isPlainObj(val)
          ? mapEntries(val, keyFn, valFn, true)
          : valFn(val, key)
    }),
    {}
  );

export const mapKeys = (obj, fn, ...args) => mapEntries(obj, fn, id, ...args);
export const mapValues = (obj, fn, ...args) => mapEntries(obj, id, fn, ...args);
