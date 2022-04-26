const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed tests", () => {
  it("a simple example", function () {
    const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
    assert.strictEqual(first, 6);
  });
});
