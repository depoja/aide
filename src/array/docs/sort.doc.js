import { sort } from "../sort";

/**
 * Sorts the array using a given compare function. If not specified, the elements will be sorted according to their unicode value.
 *
 * @param {*[]} array - The target array.
 * @param {function(current:*,  next:*):number} compare - The function which compares the *current* element to the *next*. If it returns a **negative** value *current* before *next*, if it returns a **positive** value *current* comes after *next*, otherwise they're left unchanged.
 *
 * @returns {*[]} - A new sorted array.
 *
 * @example
 * import { reduce } from "@srcode/aide";
 *
 * // default compare function
 * sort([1, 5, 2]); // [1, 2, 5]
 *
 * // custom compare function
 * const largestFirst = (current, next) => next - current;
 * sort([1, 5, 2]); // [5, 2, 1]
 */
sort;
