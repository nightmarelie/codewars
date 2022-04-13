function persistence(num, count = 0) {
  const numStr = String(num);
  if (numStr.length === 1) {
    return count;
  }

  return persistence(
    numStr.split("").reduce((n1, n2) => n1 * n2),
    ++count
  );
}
