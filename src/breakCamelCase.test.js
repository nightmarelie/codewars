describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      solution("camelCasing"),
      "camel Casing",
      "Unexpected result"
    );
    Test.assertEquals(
      solution("camelCasingTest"),
      "camel Casing Test",
      "Unexpected result"
    );
  });
});
