import { keys } from "../keys";

/**
 * Returns an array containing the enumerable *keys* of the given object (not including those on the prototype chain).
 *
 * @param {Object} object - The target object.
 *
 * @returns {*[]} An array containing the keys.
 *
 * @example
 * import { keys } from "@srcode/aide";
 *
 * keys({ name: "John", age: 21 }); // [ "name", "age" ]
 */
keys;
