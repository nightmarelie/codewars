function longest(s1, s2) {
  return `${s1}${s2}`
    .split("")
    .filter((c, idx, a) => a.indexOf(c) === idx)
    .sort()
    .join();
}
