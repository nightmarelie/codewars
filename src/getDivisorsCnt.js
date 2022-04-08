function getDivisorsCnt(n) {
  var numDivisors = 1;
  var factor = 2; // Candidate for prime factor of `n`

  // If `n` is not a prime number then it must have one factor
  // which is <= `sqrt(n)`, so we try these first:
  while (factor * factor <= n) {
    if (n % factor === 0) {
      // `factor` is a prime factor of `n`, determine the exponent:
      var exponent = 0;
      do {
        n /= factor;
        exponent++;
      } while (n % factor === 0);
      // `factor^exponent` is one term in the prime factorization of n,
      // this contributes as factor `exponent + 1`:
      numDivisors *= exponent + 1;
    }
    // Next possible prime factor:
    factor = factor == 2 ? 3 : factor + 2;
  }

  // Now `n` is either 1 or a prime number. In the latter case,
  // it contributes a factor 2:
  if (n > 1) {
    numDivisors *= 2;
  }

  return numDivisors;
}

function getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }

  return d;
}
