import { map } from "../map";

/**
 * Calls a function for each element in a given array and returns a new array containing the return values instead of the elements.
 *
 * @param {*[]} array - The target array.
 * @param {function(element:*, index:number, array:*[]):undefined} callback - The function to call for each element.
 * @param {*=} this - The **this** context of the callback.
 *
 * @returns {*[]} - The new array containing the return values instead of the elements.
 *
 * @example
 * import { map } from "@srcode/aide";
 *
 * map([1, 2, 5], el => el + 1); // [2, 3, 6]
 */
map;
