import { values } from "../values";

/**
 * Returns an array containing the enumerable *values* of the given object (not including those on the prototype chain).
 *
 * @param {Object} object - The target object.
 *
 * @returns {*[]} An array containing the values.
 *
 * @example
 * import { values } from "@srcode/aide";
 *
 * values({ name: "John", age: 21 }); // [ "John", 21 ]
 */
values;
