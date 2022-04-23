function countSmileys(arr) {
  return arr.filter((smile) => !!smile.match(/[\:;][-~]?[\)D]/gi)).length;
}

function countSmileys1(arr) {
  return arr.filter((smile) => /[\:;][-~]?[\)D]/.test(smile)).length;
}
