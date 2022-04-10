var number = function (busStops) {
  return busStops.reduce((res, numbers) => {
    const [inN, outN] = numbers;

    return (res += inN - outN);
  }, 0);
};

const number1 = (busStops) =>
  busStops.reduce((res, [inN, outN]) => (res += inN - outN), 0);
