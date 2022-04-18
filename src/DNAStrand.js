function DNAStrand(dna) {
  return dna
    .split("")
    .map((c) => {
      switch (c) {
        case "A":
          return "T";
        case "T":
          return "A";
        case "G":
          return "C";
        case "C":
          return "G";
        default:
          return c;
      }
    })
    .join("");
}
