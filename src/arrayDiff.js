function arrayDiff(a, b) {
  return a.reduce((res, cur) => {
    if (!b.includes(cur)) {
      res.push(cur);
    }
    return res;
  }, []);
}
