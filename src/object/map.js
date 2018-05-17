import { entries } from "./entries";
import { id } from "../function/id";

export const map = (obj, keyFn, valFn) =>
  entries(obj).reduce(
    (result, [key, val]) => ({ ...result, [keyFn(key, val)]: valFn(val, key) }),
    {}
  );

export const mapKeys = (obj, fn) => map(obj, fn, id);
export const mapValues = (obj, fn) => map(obj, id, fn);
