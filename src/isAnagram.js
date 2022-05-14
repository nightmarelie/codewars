var isAnagram = function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
};

function cleanString(str) {
  return str.toLowerCase().split("").sort().join();
}
