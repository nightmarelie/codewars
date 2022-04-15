function deleteNth(arr, n) {
  const count = {};
  return arr.filter((i) => {
    count[i] = count[i] >= 0 ? count[i] + 1 : 0;
    return count[i] < n;
  });
}

const deleteNth1 = (a, x) => {
  let m = {};
  return a.filter((v) => (m[v] = m[v] + 1 || 1) <= x);
};
