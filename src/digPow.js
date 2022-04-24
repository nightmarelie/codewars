function digPow(n, p) {
  const num = String(n)
    .split("")
    .map((n, idx) => Math.pow(n, p + idx))
    .reduce((acc, n) => acc + n, 0);

  const result = Math.round(num / n);

  return n * result === num ? result : -1;
}
