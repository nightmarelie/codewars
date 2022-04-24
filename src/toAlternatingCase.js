String.prototype.toAlternatingCase = function () {
  return [...this]
    .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
    .join("");
};
