function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((count, current) => count + Number(!!current), 0);
}
