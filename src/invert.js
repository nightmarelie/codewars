function invert(array) {
  return array.map((n) => (n >= 0 ? -n : Math.abs(n)));
}
