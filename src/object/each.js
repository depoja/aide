import { entries } from "./entries";
import { keys } from "./keys";
import { values } from "./values";
import { each as _each } from "../array/each";

export const eachEntry = (obj, fn) =>
  _each(entries(obj), (entry, ...args) => fn(...entry, ...args));

export const eachKey = (obj, fn) => _each(keys(obj), fn);
export const eachValue = (obj, fn) => _each(values(obj), fn);
