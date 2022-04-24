function digPow(n, p) {
  const num = String(n)
    .split("")
    .map((n, idx) => Math.pow(n, p + idx))
    .reduce((acc, n) => acc + n, 0);

  const result = Math.round(num / n);

  return n * result === num ? result : -1;
}

function digPow(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}
