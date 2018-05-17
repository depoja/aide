import { reduce } from "../array/reduce";
import { parsePath } from "./path";

export const get = (obj, path) =>
  reduce(parsePath(path), (val, key) => val && val[key], obj);
