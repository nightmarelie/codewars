function stray(numbers) {
  const res = numbers.reduce(
    (acc, n) => ({ ...acc, [n]: acc[n] ? acc[n] + 1 : 1 }),
    {}
  );

  for (const i in res) {
    if (res[i] === 1) {
      return +i;
    }
  }
}
