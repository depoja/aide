import { some } from "../some";

/**
 * Calls a function for each element and returns **true** if *some* calls return **true**.
 *
 * @param {*[]} array - The target array.
 * @param {function(element:*, index:number, array:*[]):boolean} callback - The function to call for each element.
 * @param {*=} this - The **this** context of the callback.
 *
 * @returns {boolean} - **true** if the function returns **true** for some elements, **false** otherwise.
 *
 * @example
 * import { some } from "@srcode/aide";
 *
 * some([1, 2, 5], el => el > 4); // true
 */
some;
