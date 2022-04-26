function countBy(x, n) {
  return Array(n)
    .fill(0)
    .map((_, idx) => (idx + 1) * x);
}
