describe("Example test cases", function () {
  Test.assertSimilar(flattenAndSort([]), []);
  Test.assertSimilar(flattenAndSort([[], []]), []);
  Test.assertSimilar(flattenAndSort([[], [1]]), [1]);
  Test.assertSimilar(
    flattenAndSort([
      [3, 2, 1],
      [7, 9, 8],
      [6, 4, 5],
    ]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  );
  Test.assertSimilar(
    flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]),
    [1, 2, 3, 4, 5, 6, 100]
  );
});
