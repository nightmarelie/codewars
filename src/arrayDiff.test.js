const arrayDiff = require("./arrayDiff");

describe("Sample tests", function () {
  it("Should pass Sample tests", function () {
    Test.assertDeepEquals(arrayDiff([], [4, 5]), [], "a was [], b was [4,5]");
    Test.assertDeepEquals(
      arrayDiff([3, 4], [3]),
      [4],
      "a was [3,4], b was [3]"
    );
    Test.assertDeepEquals(
      arrayDiff([1, 8, 2], []),
      [1, 8, 2],
      "a was [1,8,2], b was []"
    );
    Test.assertDeepEquals(
      arrayDiff([1, 2, 3], [1, 2]),
      [3],
      "a was [1,2,3], b was [1,2]"
    );
  });
});
