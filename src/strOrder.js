function order(words) {
  const regExp = /[^0-9]/gi;
  return words
    .split(" ")
    .sort(
      (a, b) => Number(a.replace(regExp, "")) - Number(b.replace(regExp, ""))
    )
    .join(" ");
}
