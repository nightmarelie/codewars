function isIsogram(str) {
  return str
    .toLowerCase()
    .split("")
    .every((l, idx, arr) => arr.indexOf(l) === idx);
}

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}
