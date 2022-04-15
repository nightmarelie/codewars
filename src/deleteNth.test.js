describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
    Test.assertSimilar(
      deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
      [1, 1, 3, 3, 7, 2, 2, 2]
    );
  });
});
