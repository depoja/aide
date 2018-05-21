export const isArr = Array.isArray;
export const isPlainObj = o => o && o.constructor === Object;
export const isJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
