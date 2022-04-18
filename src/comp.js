function comp(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }
  const compare = (a, b) => a - b;
  const ar1 = array1.sort(compare);
  return array2
    .map(Math.sqrt)
    .sort(compare)
    .every((e, idx) => ar1[idx] === e);
}
