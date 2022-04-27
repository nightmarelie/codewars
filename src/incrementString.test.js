describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(incrementString("foobar000"), "foobar001");
    Test.assertEquals(incrementString("foo"), "foo1");
    Test.assertEquals(incrementString("foobar001"), "foobar002");
    Test.assertEquals(incrementString("foobar99"), "foobar100");
    Test.assertEquals(incrementString("foobar099"), "foobar100");
    Test.assertEquals(incrementString(""), "1");
  });
});
