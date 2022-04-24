function count(string) {
  return [...string].reduce(
    (acc, n) => ({ ...acc, [n]: acc[n] ? acc[n] + 1 : 1 }),
    {}
  );
}
