export const prototypal = (empty, immut) => (key, inPlace = false) => {
  if (typeof empty[key] === "function") {
    return (target, ...args) =>
      inPlace ? immut(target)[key](...args) : target[key](...args);
  }
  return target => target[key];
};

export const global = name => key => {
  if (typeof name[key] === "function") {
    return (target, ...args) => name[key](target, ...args);
  }
  return name[key];
};
