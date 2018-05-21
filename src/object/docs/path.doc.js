import { parsePath } from "../path";

/**
 * Will parse an object path string (sequence of keys to be accessed) and return an array with those keys.
 *
 * @param {Object} object - The target object.
 *
 * @returns {*[]}  An array containing the keys.
 *
 * @example
 * import { parsePath } from "@srcode/aide";
 *
 * parsePath("employees["51213"].children[2].name"); // ["employees", "51213", "children", 2, "name"]
 */
parsePath;
