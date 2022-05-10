function twoSum(numbers, target) {
  const res = [];

  numbers.forEach((e, idx, arr) => {
    if (res.length != 2) {
      const search = target - e;
      const resIdx = arr.indexOf(search);
      if (resIdx != -1 && resIdx != idx) {
        res.push(idx);
        res.push(resIdx);
      }
    }
  });

  return res;
}
