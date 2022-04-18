function comp(array1, array2) {
  return !!array1 && !!array2
    ? array2.map(Math.sqrt).every((e) => array1.indexOf(e) !== -1)
    : false;
}
