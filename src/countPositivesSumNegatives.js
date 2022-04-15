function countPositivesSumNegatives(input) {
  return (input || []).reduce((acc, n) => {
    switch (true) {
      case n > 0:
        acc[0] = ++acc[0] || 1;
        acc[1] = acc[1] || 0;
        break;
      case n < 0:
        acc[0] = acc[0] || 0;
        acc[1] = (acc[1] || 0) + n;
        break;
    }
    return acc;
  }, []);
}
