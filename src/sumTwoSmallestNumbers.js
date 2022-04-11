function sumTwoSmallestNumbers(numbers) {
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return min + Math.min(...numbers);
}

function sumTwoSmallestNumbers1(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
