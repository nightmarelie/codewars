function solution(input, markers) {
  return input
    .split("\n")
    .map((s) => {
      return markers
        .reduce((acc, m) => acc.replace(new RegExp(`\\${m}.*`), ""), s)
        .trim();
    })
    .join("\n");
}
