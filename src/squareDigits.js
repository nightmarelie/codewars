function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map((n) => n ** 2)
      .reduce((acc, n) => `${acc}${n}`, "")
  );
}
