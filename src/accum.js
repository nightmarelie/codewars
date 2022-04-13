function accum(s) {
  return s
    .split("")
    .map((c, idx) => c.toLowerCase().repeat(++idx))
    .map((c) => `${c[0].toUpperCase()}${c.slice(1)}`)
    .join("-");
}

function accum(s) {
  return s
    .split("")
    .map((c, idx) => `${c.toUpperCase()}${c.toLowerCase().repeat(idx)}`)
    .join("-");
}
