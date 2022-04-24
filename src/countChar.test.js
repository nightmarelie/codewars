const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("should pass sample tests", () => {
    assert.deepEqual(count("aba"), { a: 2, b: 1 });
    assert.deepEqual(count(""), {});
  });
});
