describe("Basic testing", function () {
  it("", () => {
    Test.assertEquals(countSmileys([]), 0);
    Test.assertEquals(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
    Test.assertEquals(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
    Test.assertEquals(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
  });
});
