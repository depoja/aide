import { filter } from "../filter";

/**
 * Calls a function for each element and returns an array containing only the elements for which the function returned true.
 *
 * @param {*[]} array - The target array.
 * @param {function(element:*, index:number, array:*[]):boolean} callback - The function to call for each element.
 * @param {*=} this - The **this** context of the callback.
 *
 * @returns {*[]} - The filtered array.
 *
 * @example
 * import { filter } from "@srcode/aide";
 *
 * filter([1, 2, 5], el => el > 3); // [5]
 */
filter;
