const assert = require("chai").assert;

describe("Sample tests", () => {
  it("h = 3.0, bounce = 0.66, window = 1.5", () => {
    assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
  });

  it("h = 30.0, bounce = 0.66, window = 1.5", () => {
    assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
  });

  it("h = 3.0, bounce = 1.0, window = 1.5", () => {
    assert.strictEqual(bouncingBall(3.0, 1.0, 1.5), -1);
  });
});
