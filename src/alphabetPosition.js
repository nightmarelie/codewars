function alphabetPosition(text) {
  return [...text]
    .filter((c) => /^[a-zA-Z]+$/.test(c))
    .map((a) => parseInt(a, 36) - 9)
    .filter((a) => a >= 0)
    .join(" ");
}

function alphabetPosition1(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}
