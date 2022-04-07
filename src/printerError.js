function printerError(s) {
  return `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
}

function printerError1(s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count + "/" + s.length;
}
