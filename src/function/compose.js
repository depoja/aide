import { reduce } from "../array/reduce";
import { reverse } from "../array/reverse";

export const compose = (...fns) => val =>
  reduce(reverse(fns), (result, fn) => fn(result), val);
