import { get } from "../get";

/**
 * Returns the value at the given *path* of the given object.
 *
 * @param {Object} object - The target object.
 * @param {string} path - The path to be accessed.
 * @param {*} defaultValue - The value to be returned if the value cannot be found.
 *
 * @returns {*} - The value at the given path.
 *
 * @example
 * import { get } from "@srcode/aide";
 *
 * const obj = { employees: { "51213": { children: [{ name: "Joe" }] }}};
 * get(obj, "employees["51213"].children[0].name"); // "Joe"
 */
get;
