import { reduce } from "../array/reduce";
import { parsePath } from "./path";

export const get = (obj, path, defaultValue) =>
  reduce(parsePath(path), (val, key) => (val ? val[key] : defaultValue), obj);
