function sumTwoSmallestNumbers(numbers) {
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return min + Math.min(...numbers);
}
