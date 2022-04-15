describe("longest", function () {
  it("Basic tests", function () {
    Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty");
    Test.assertEquals(
      longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
      "abcdefghilnoprstu"
    );
    Test.assertEquals(
      longest("inmanylanguages", "theresapairoffunctions"),
      "acefghilmnoprstuy"
    );
  });
});
