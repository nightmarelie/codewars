function pigIt(str) {
  return str
    .split(" ")
    .map((s) => (/\w/gi.test(s) ? `${s.slice(1)}${s[0]}ay` : s))
    .join(" ");
}

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}
