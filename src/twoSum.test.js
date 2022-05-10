const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", function () {
  it("should pass sample tests", function () {
    function numericalCompare(a, b) {
      return a - b;
    }

    assert.deepEqual(twoSum([1, 2, 3], 4).sort(numericalCompare), [0, 2]);
    assert.deepEqual(
      twoSum([1234, 5678, 9012], 14690).sort(numericalCompare),
      [1, 2]
    );
    assert.deepEqual(twoSum([2, 2, 3], 4).sort(numericalCompare), [0, 1]);
  });
});
