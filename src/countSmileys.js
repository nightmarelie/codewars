function countSmileys(arr) {
  return arr.filter((smile) => !!smile.match(/[\:;][-~]?[\)D]/gi)).length;
}
