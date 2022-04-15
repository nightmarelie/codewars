function SeriesSum(n) {
  return String(
    Array(n)
      .fill(null)
      .reduce((acc, _, idx) => acc + 1 / (1 + idx * 3), 0)
      .toFixed(2)
  );
}
