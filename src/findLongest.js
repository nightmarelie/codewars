function findLongest(array) {
  const maxLength = String(Math.max(...array)).length;
  return array.find((num) => String(num).length === maxLength);
}

function findLongest(array) {
  return array.reduce((res, curr) =>
    String(res).length < String(curr).length ? curr : res
  );
}
