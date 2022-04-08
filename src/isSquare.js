var isSquare = function (n) {
  const isSquare = Number.isInteger(Math.sqrt(n));
  return n < 0 ? false : isSquare;
};

function isSquare1(n) {
  return Math.sqrt(n) % 1 === 0;
}
