const reverseSeq = (n) => {
  const result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

const reverseSeq1 = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};
