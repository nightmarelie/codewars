describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(squareSum([1, 2]), 5);
    Test.assertEquals(squareSum([0, 3, 4, 5]), 50);
    Test.assertEquals(squareSum([]), 0);
  });
});
