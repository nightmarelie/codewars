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
