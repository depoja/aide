import { every } from "../every";

/**
 * Calls a function for each element and returns **true** *only* if every call returns **true**.
 *
 * @param {*[]} array - The target array.
 * @param {function(element:*, index:number, array:*[]):boolean} callback - The function to call for each element.
 * @param {*=} this - The **this** context of the callback.
 *
 * @returns {boolean} - **true** if the function returns **true** for every element, **false** otherwise.
 *
 * @example
 * import { every } from "@srcode/aide";
 *
 * every([1, 2, 5], el => el > 0); // true
 */
every;
