// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) =>
      word.split("").reduceRight((res, letter) => (res += letter), "")
    )
    .join(" ");
}

const reverseWords2 = (s) => s.replace(/\S+/g, (v) => [...v].reverse().join``);
