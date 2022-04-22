function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((count, current) => count + Number(!!current), 0);
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
