function basicOp(operation, value1, value2) {
  return eval(`${value1} ${operation} ${value2}`);
}

function basicOp(operation, value1, value2) {
  var cases = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };
  return cases[operation];
}
