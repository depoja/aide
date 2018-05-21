import { mapEntries, mapKeys, mapValues } from "../map";

/**
 * Calls two functions, one for each *key* and another for each *value* of the given object, each one returning the new key/value.
 *
 * @param {Object} object - The target object.
 * @param {function(key:*, value:*):*} keyFn - The function to call for each key, returning a new key.
 * @param {function(value:*, key:*):*} valueFn - The function to call for each value, returning a new value.
 * @param {boolean} recursive - If true, will recursively apply the functions to nested objects as well.
 *
 * @returns {Object} - A new object with the transformations applied.
 *
 * @example
 * import { mapEntries } from "@srcode/aide";
 *
 * mapEntries({ first: 51, second: 24 }, key => key.toUpperCase(), val => val * 2); // { FIRST: 102, SECOND: 48 }
 */
mapEntries;

/**
 * Calls a functions for each *key* of the given object, returning a new key.
 *
 * @param {Object} object - The target object.
 * @param {function(key:*, value:*):*} keyFn - The function to call for each key, returning a new key.
 * @param {boolean} recursive - If true, will recursively apply the functions to nested objects as well.
 *
 * @returns {Object} - A new object with the transformations applied.
 *
 * @example
 * import { mapKeys } from "@srcode/aide";
 *
 * mapKeys({ first: 51, second: 24 }, key => key.toUpperCase()); // { FIRST: 51, SECOND: 24 }
 */
mapKeys;

/**
 * Calls a functions for each *value* of the given object, returning a new value.
 *
 * @param {Object} object - The target object.
 * @param {function(value:*, key:*):*} valueFn - The function to call for each value, returning a new value.
 * @param {boolean} recursive - If true, will recursively apply the functions to nested objects as well.
 *
 * @returns {Object} - A new object with the transformations applied.
 *
 * @example
 * import { mapValues } from "@srcode/aide";
 *
 * mapValues({ first: 51, second: 24 }, val => val * 2); // { first: 102, second: 48 }
 */
mapValues;
