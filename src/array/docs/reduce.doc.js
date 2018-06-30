import { reduce } from "../reduce";

/**
 * Calls a function against each element of a given array and an accumulator (resulting from the function) to reduce it to a single value.
 *
 * @param {*[]} array - The target array.
 * @param {function(accumulator:*,  element:*, elementIndex:number, array:*[]):*} callback - The function to call for each element.
 * @param {*} initialAccumulator - The **accumulator's** initial value.
 *
 * @returns {*} - The new value resulting from the reduction.
 *
 * @example
 * import { reduce } from "@srcode/aide";
 *
 * reduce([1, 2, 5], (acc, el) => acc + el); // 8; The sum of the array
 */
reduce;
