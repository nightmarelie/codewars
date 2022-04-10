var number = function (busStops) {
  return busStops.reduce((res, numbers) => {
    const [inN, outN] = numbers;

    return (res += inN - outN);
  }, 0);
};
