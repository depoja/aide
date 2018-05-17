import { entries } from "./entries";

export const mapKeys = (obj, fn) =>
  entries(obj).reduce(
    (acc, [key, val]) => ({ ...acc, [fn(val, key)]: val }),
    {}
  );

export const mapValues = (obj, fn) =>
  entries(obj).reduce(
    (acc, [key, val]) => ({ ...acc, [key]: fn(val, key) }),
    {}
  );
