describe("printerError", function () {
  it("Basic tests", function () {
    var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    Test.assertEquals(printerError(s), "3/56");
  });
});
