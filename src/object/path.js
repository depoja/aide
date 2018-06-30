const stripQuotes = str => str.replace(/['"`]/g, "");

export const parsePath = (path = "") =>
  path
    .split(/[.\[\]]/)
    .filter(key => !!key)
    .map(key => (isNaN(key) ? stripQuotes(key) : parseInt(key))); // ["names", "0", 2]; -> number keys in path denote an array
