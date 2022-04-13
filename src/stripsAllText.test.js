describe("Tests", () => {
  it("test", () => {
    function checkComments(input, markers, expected) {
      var actual;
      actual = solution(input, markers);
      return Test.expect(
        actual === expected,
        "Returned '" + actual + "' but expected '" + expected + "'"
      );
    }

    checkComments(
      "apples, plums % and bananas\npears\noranges !applesauce",
      ["%", "!"],
      "apples, plums\npears\noranges"
    );
    checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne");
  });
});
