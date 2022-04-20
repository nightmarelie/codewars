function squareSum(numbers) {
  return numbers.map((n) => n ** 2).reduce((acc, i) => acc + i, 0);
}
