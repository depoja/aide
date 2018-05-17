import * as utils from "../_utils";
export const prototypal = utils.prototypal({}, obj => ({ ...obj }));
export const global = utils.global(Object);
