function duplicateEncode(word) {
  return word
    .split("")
    .map((c, idx) =>
      new RegExp(`${c}`, "ig").test(word.replace(new RegExp(`${c}`, "i"), ""))
        ? ")"
        : "("
    )
    .join("");
}

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  );
}

function duplicateEncode(word) {
  var letters = word.toLowerCase().split("");
  return letters
    .map(function (c, i) {
      return letters.some(function (x, j) {
        return x === c && i !== j;
      })
        ? ")"
        : "(";
    })
    .join("");
}
