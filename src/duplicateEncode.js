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
