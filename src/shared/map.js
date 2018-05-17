import { isPlainObj, isArr } from "./is";
import { map as mapObj } from "../object/map";
import { map as mapArr } from "../array/map";

export const map = (target, ...args) => {
  if (isArr(target)) {
    return mapArr(target, ...args);
  }

  if (isPlainObj(target)) {
    return mapObj(target, ...args);
  }

  throw "The first argument must be either an array or a plain object";
};
