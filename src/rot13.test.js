describe("Rot13", function () {
  it("test", function () {
    Test.expect(
      "grfg" == rot13("test"),
      "Input: test , Expected Output: grfg , Actual Output: " + rot13("test")
    );
  });
  it("Test", function () {
    Test.expect(
      "Grfg" == rot13("Test"),
      "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test")
    );
  });
});
