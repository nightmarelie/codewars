const chai = require("chai");
const assert = chai.assert;

describe("Case 1", function () {
  it("should be defined", function () {
    assert.strictEqual(getCount("abracadabra"), 5);
  });
});
