describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(getDivisorsCnt(1), 1);
    Test.assertEquals(getDivisorsCnt(10), 4);
    Test.assertEquals(getDivisorsCnt(11), 2);
    Test.assertEquals(getDivisorsCnt(54), 8);
  });
});
