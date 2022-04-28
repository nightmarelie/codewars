function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  let rid = false;
  return numbers.filter((n) => {
    if (!rid && n === min) {
      rid = true;
      return false;
    }

    return true;
  });
}
