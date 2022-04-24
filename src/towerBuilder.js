function towerBuilder(nFloors) {
  return Array(nFloors)
    .fill("*")
    .map((ast, idx) => {
      const maxLength = nFloors * 2 - 1;
      const astLength = idx * 2 + 1;
      return ast
        .repeat(astLength)
        .padStart(maxLength / 2 + astLength / 2)
        .padEnd(maxLength);
    });
}
