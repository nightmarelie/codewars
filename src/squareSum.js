function squareSum(numbers) {
  return numbers.map((n) => n ** 2).reduce((acc, i) => acc + i, 0);
}

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}
