function deleteNth(arr, n) {
  const count = {};
  return arr.filter((i) => {
    count[i] = count[i] >= 0 ? count[i] + 1 : 0;
    return count[i] < n;
  });
}
