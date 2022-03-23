function arrayDiff(a, b) {
  return a.filter((i) => !b.includes(i));
}
