describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(solution("abcde", "cde"), true);
    Test.assertEquals(solution("abcde", "abc"), false);
  });
});
