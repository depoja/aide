import { entries } from "./entries";
import { reduce } from "../array/reduce";
import { id } from "../function/id";

export const map = (obj = {}, keyFn = () => {}, valFn = () => {}) =>
  reduce(
    entries(obj),
    (result, [key, val]) => ({ ...result, [keyFn(key, val)]: valFn(val, key) }),
    {}
  );

export const mapKeys = (obj, fn) => map(obj, fn, id);
export const mapValues = (obj, fn) => map(obj, id, fn);
