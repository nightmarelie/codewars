function capitalize(s) {
  return s.split("").reduce(
    (acc, char, idx) => {
      const even = idx % 2 === 0;
      acc[0] = `${acc[0]}${even ? char.toUpperCase() : char.toLowerCase()}`;
      acc[1] = `${acc[1]}${even ? char.toLowerCase() : char.toUpperCase()}`;
      return acc;
    },
    ["", ""]
  );
}
