import { each } from "../each";

/**
 * Calls a function for each element in a given array.
 *
 * @param {*[]} array - The target array.
 * @param {function(element:*, index:number, array:*[]):undefined} callback - The function to call for each element.
 * @param {*=} this - The **this** context of the callback.
 *
 * @returns {undefined}
 *
 * @example
 * import { each } from "@srcode/aide";
 *
 * each([1, 2, 5], console.log); // outputs each element
 */
each;
