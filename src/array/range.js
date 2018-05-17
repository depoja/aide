export const range = (start, end) => {
  if (end) {
    return start > end ? _range(end, start) : _range(start, end);
  }
  return _range(0, start);
};
const _range = (n, m) => [...Array(m - n).keys()].map(k => k + n);
