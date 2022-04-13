function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return "";

  const categoryMap = listOfCat.reduce((acc, c) => {
    return listOfArt.reduce((acc1, art) => {
      const [category, quantity] = art.split(" ");
      const count = category.startsWith(c) ? +quantity : 0;
      return { ...acc1, [c]: acc1[c] ? acc1[c] + count : count };
    }, acc);
  }, {});

  return Object.entries(categoryMap)
    .map(([key, value]) => `(${key} : ${value})`)
    .join(" - ");
}
