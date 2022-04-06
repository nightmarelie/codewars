function positiveSum(arr) {
  return Math.abs(arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0));
}

export { positiveSum };
