import { eachEntry, eachKey, eachValue } from "../each";

/**
 * Calls a function for each *entry* (key-value pair) of the given object.
 *
 * @param {Object} object - The target object.
 * @param {function(entry:*[], index:number, entries:*[]):undefined} callback - The function to call for each entry.
 *
 * @returns {undefined}
 *
 * @example
 * import { eachEntry } from "@srcode/aide";
 *
 * eachEntry({ name: "John", age: 21 }, console.log); // outputs [ "name", "John" ], [ "age", 21 ]
 */
eachEntry;

/**
 * Calls a function for each *key* of the given object.
 *
 * @param {Object} object - The target object.
 * @param {function(key:*[], index:number, keys:*[]):undefined} callback - The function to call for each key.
 *
 * @returns {undefined}
 *
 * @example
 * import { eachKey } from "@srcode/aide";
 *
 * eachKey({ name: "John", age: 21 }, console.log); // outputs "name", "age"
 */
eachKey;

/**
 * Calls a function for each *value* of the given object.
 *
 * @param {Object} object - The target object.
 * @param {function(value:*[], index:number, values:*[]):undefined} callback - The function to call for each value.
 *
 * @returns {undefined}
 *
 * @example
 * import { eachValue } from "@srcode/aide";
 *
 * eachValue({ name: "John", age: 21 }, console.log); // outputs "John", 21
 */
eachValue;
