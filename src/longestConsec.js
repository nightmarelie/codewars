function longestConsec(strarr, k) {
  if (strarr.length == 0 || strarr.length < k || k <= 0) {
    return "";
  }

  const res = strarr
    .reduce((acc, item, idx) => {
      const subArr = strarr.slice(idx, idx + k);
      if (subArr.length < k) {
        return acc;
      }

      return [...acc, subArr];
    }, [])
    .map((arr) => arr.join(""));

  let maxLng = Math.max(...res.map((elem) => elem.length));

  return res.find((elem) => elem.length === maxLng);
}
