function findLongest(array) {
  const maxLength = String(Math.max(...array)).length;
  return array.find((num) => String(num).length === maxLength);
}
