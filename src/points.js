function points(games) {
  const calc = (x, y) => {
    switch (true) {
      case x > y:
        return 3;
      case x < y:
        return 0;
      case x == y:
        return 1;
    }
  };

  return games.reduce((sum, n) => {
    const [x, y] = n.split(":");
    return sum + calc(+x, +y);
  }, 0);
}
