function countPositivesSumNegatives(input) {
  return input && input.length
    ? input.reduce(
        (acc, n) => {
          switch (true) {
            case n > 0:
              acc[0] = ++acc[0];
              break;
            case n < 0:
              acc[1] = acc[1] + n;
              break;
          }
          return acc;
        },
        [0, 0]
      )
    : [];
}

function countPositivesSumNegatives1(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}
