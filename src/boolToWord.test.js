const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for basic tests", () => {
    assert.strictEqual(boolToWord(true), "Yes");
    assert.strictEqual(boolToWord(false), "No");
  });
});
