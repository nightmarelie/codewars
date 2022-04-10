function minValue(values) {
  return +values
    .reduce((res, num) => (res.includes(num) ? res : [...res, num]), [])
    .sort((a, b) => a - b)
    .join("");
}
