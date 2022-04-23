var summation = function (num) {
  return Array(num)
    .fill(null)
    .reduce((acc, _, idx) => acc + idx + 1, 0);
};
