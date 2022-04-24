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

function stray(numbers) {
  for (var i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}
