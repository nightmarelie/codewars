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

function DNAStrand1(dna) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
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
