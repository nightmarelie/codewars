function squareSum(numbers) {
  return numbers.map((n) => n ** 2).reduce((acc, i) => acc + i, 0);
}

function squareSum(numbers) {
  return numbers.reduce((num1, num2) => num1 * num1 + num2 * num2);
}
