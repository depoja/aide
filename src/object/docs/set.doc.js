import { set } from "../set";

/**
 * Sets the value at the given *path* of the given object. If path does not exists, it's expanded (object for string keys, array for numeric keys) until the value is set.
 *
 * @param {Object} object - The target object.
 * @param {string} path - The path where the value will be set.
 * @param {*} value - The value to set.
 *
 * @returns {Object} - A new object with the path set to the given value.
 *
 * @example
 * import { set } from "@srcode/aide";
 *
 * const unchanged = { employees: { "51213": { children: [{ name: "Joe" }] }}};
 * const changed = set(unchanged, "employees["51213"].children[0].name", "Bob"); // { employees: { "51213": { children: [{ name: "Bob" }] }}}
 */
set;
