"use strict";

function flattenAndSort(array) {
  return array.reduce((res, num) => [...res, ...num], []).sort((a, b) => a - b);
}

function flattenAndSort1(array) {
  return [].concat(...array).sort((a, b) => a - b);
}
