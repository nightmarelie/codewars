function titleCase(title, minorWords = "") {
  if (title === "") {
    return title;
  }

  const arrMinor = minorWords.split(" ").map((word) => word.toLowerCase());
  return title
    .split(" ")
    .map((word, idx) => {
      const lowerWord = word.toLowerCase();

      if (arrMinor.includes(lowerWord) && idx != 0) {
        return lowerWord;
      }

      return `${lowerWord[0].toUpperCase()}${lowerWord.slice(1)}`;
    })
    .join(" ");
}

function titleCase(title, minorWords) {
  var minorWords =
    typeof minorWords !== "undefined"
      ? minorWords.toLowerCase().split(" ")
      : [];
  return title
    .toLowerCase()
    .split(" ")
    .map(function (v, i) {
      if (v != "" && (minorWords.indexOf(v) === -1 || i == 0)) {
        v = v.split("");
        v[0] = v[0].toUpperCase();
        v = v.join("");
      }
      return v;
    })
    .join(" ");
}
