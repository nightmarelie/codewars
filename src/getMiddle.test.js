describe("GetMiddle", function () {
  it("Tests", function () {
    Test.assertEquals(getMiddle("test"), "es");
    Test.assertEquals(getMiddle("testing"), "t");
    Test.assertEquals(getMiddle("middle"), "dd");
    Test.assertEquals(getMiddle("A"), "A");
  });
});
