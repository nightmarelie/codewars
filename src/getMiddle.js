// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  const length = s.length;
  const middle = Math.floor(length / 2);

  if (middle + middle == length) {
    return [s[middle - 1], s[middle]].join("");
  } else {
    return s[middle];
  }
}
