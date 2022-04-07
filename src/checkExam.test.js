const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]),
      6
    );
    assert.strictEqual(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
    assert.strictEqual(
      checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]),
      16
    );
    assert.strictEqual(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
  });
});
