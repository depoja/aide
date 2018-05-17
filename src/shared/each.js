import { isPlainObj, isArr } from "./is";
import { each as eachObj } from "../object/each";
import { each as eachArr } from "../array/each";

export const each = (target, ...args) => {
  if (isArr(target)) {
    return eachArr(target, ...args);
  }

  if (isPlainObj(target)) {
    return eachObj(target, ...args);
  }

  throw "The first argument must be either an array or a plain object";
};
