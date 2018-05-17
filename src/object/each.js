import { keys } from "./keys";
import { values } from "./values";

import { each } from "../array/each";

export const eachKey = (obj, ...args) => each(keys(obj), ...args);
export const eachValue = (obj, ...args) => each(values(obj), ...args);
