import { entries } from "./entries";
import { each as _each } from "../array/each";

export const each = (obj = {}, keyFn = () => {}, valFn = () => {}) =>
  _each(entries(obj), ([key, val]) => {
    keyFn(key, val);
    valFn(val, key);
  });

export const eachKey = (obj, fn) => each(obj, fn, undefined);
export const eachValue = (obj, fn) => each(obj, undefined, fn);
