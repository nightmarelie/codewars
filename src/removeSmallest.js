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

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

function removeSmallest(numbers) {
  const indexOfMin = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, idx) => idx !== indexOfMin);
}
