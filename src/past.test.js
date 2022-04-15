describe("Fixed Tests", () => {
  it("Tests", () => {
    Test.assertEquals(past(0, 1, 1), 61000);
    Test.assertEquals(past(1, 1, 1), 3661000);
    Test.assertEquals(past(0, 0, 0), 0);
    Test.assertEquals(past(1, 0, 1), 3601000);
    Test.assertEquals(past(1, 0, 0), 3600000);
  });
});
