const defaultTransforms = {
  uppercase: str => str.toUpperCase(),
  capitalized: str => str.charAt(0).toUpperCase() + str.slice(1),
  lowercase: str => str.toLowerCase(),
  trim: str => str.replace(/\s+/g, "")
};

const transform = (str, transforms = ["lowercase", "trim"]) =>
  transforms.reduce((result, t) => defaultTransforms[t](result), str);

const cases = {
  camel: {
    from: /(<=[a-z])(?=[A-Z])|(<=[A-Z])(?=[A-Z][a-z])/,
    to: (chunk, i, chunks) =>
      i > 0 ? transform(chunk, ["capitalized"]) : chunk
  },
  pascal: {
    from: /(<=[a-z])(?=[A-Z])|(<=[A-Z])(?=[A-Z][a-z])/,
    to: (chunk, i, chunks) => transform(chunk, ["capitalized"])
  },
  snake: {
    from: /[_]/,
    to: (chunk, i, chunks) => (i > 0 ? `_${chunk}` : chunk)
  }
};

export const convertCase = (src, dest) => str => {
  const srcCase = cases[src];
  const destCase = cases[dest];
  const chunks = str.split(srcCase.from).map(chunk => transform(chunk));

  return chunks.reduce((acc, ...args) => acc + destCase.to(...args), "");
};
