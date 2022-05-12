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
