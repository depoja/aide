export const curry = fn => (...args) => {
  if (!args.length) {
    throw "An argument must be passed to a curried function.";
  }

  return args.length >= fn.length ? fn(...args) : curry(fn.bind(null, ...args));
};
