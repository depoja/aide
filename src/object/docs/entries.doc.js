import { entries } from "../entries";

/**
 * Returns an array containing the enumerable *entries* (key-value pairs) of the given object (not including those on the prototype chain).
 *
 * @param {Object} object - The target object.
 *
 * @returns {Array.<*[]>} An array containing the entries.
 *
 * @example
 * import { entries } from "@srcode/aide";
 *
 * entries({ name: "John", age: 21 }); // [[ "name", "John" ], [ "age", 21 ]]
 */
entries;
