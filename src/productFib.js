function productFib(prod) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 0; i < Infinity; i++) {
    const comp = n1 * n2;
    if (comp == prod) {
      return [n1, n2, true];
    }

    if (comp > prod) {
      return [n1, n2, false];
    }

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  throw new Error("Error");
}

function productFib1(prod) {
  var n = 0;
  var nPlus = 1;

  while (n * nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }

  return [n, nPlus, n * nPlus === prod];
}
