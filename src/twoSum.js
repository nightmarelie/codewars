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

function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

function twoSum(numbers, target) {
  var tmp,
    hash = {};
  numbers.forEach(function (a, i) {
    hash[a] = i;
  });

  for (var i = 0; i < numbers.length; i++) {
    tmp = target - numbers[i];
    if (typeof hash[tmp] !== "undefined") return [i, hash[tmp]];
  }
}
