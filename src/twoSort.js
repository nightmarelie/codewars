function twoSort(s) {
  return s.sort().find(Boolean).split("").join("***");
}

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

function howMuchILoveYou(nbPetals) {
  return [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ][nbPetals % 6];
}
