function count(string) {
  return [...string].reduce(
    (acc, n) => ({ ...acc, [n]: acc[n] ? acc[n] + 1 : 1 }),
    {}
  );
}

const count = (string) =>
  [...string].reduce((pre, val) => ((pre[val] = -~pre[val]), pre), {});

// pre[val] = val in pre ? ++pre[val] : 1;
// bitwise not / unary negation
// ~2 -> -3
// -~2 -> 3

// -~undefined -> 1
