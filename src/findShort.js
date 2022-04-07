function findShort(s) {
  return Math.min(...s.split(" ").map((subs) => subs.length));
}
