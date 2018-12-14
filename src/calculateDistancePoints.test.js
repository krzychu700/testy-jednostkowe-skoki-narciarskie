const assert = require("assert");
const distancePoints = require("./calculateDistancePoints");

describe("distancePoints", () => {

  describe("Normal Hill", () => {
    it("should return a number when jump is shorter than k point", () => {
      const actual = distancePoints("Normal", 80, 98);

      const expected = 24;

      assert.equal(actual, expected);
    });
    it("should return a number when jump equals than k point", () => {
      const actual = distancePoints("Normal", 98, 98);

      const expected = 60;

      assert.equal(actual, expected);
    });
    it("should return a number when jump is longer than k point", () => {
      const actual = distancePoints("Normal", 111, 98);

      const expected = 86;

      assert.equal(actual, expected);
    });
    it("should return a number when values are not provided", () => {
      const actual = distancePoints();

      const expected = 60;

      assert.equal(actual, expected);
    });
  });

  describe("Large Hill", () => {
    it("should return a number when jump is shorter than k point", () => {
      const actual = distancePoints("Large", 112.5, 120);

      const expected = 46.5;

      assert.equal(actual, expected);
    });

    it("should return a number when jump equals than k point", () => {
      const actual = distancePoints("Large", 120, 120);

      const expected = 60;

      assert.equal(actual, expected);
    });

    it("should return a number when jump is longer than k point", () => {
      const actual = distancePoints("Large", 134, 120);

      const expected = 85.2;

      assert.equal(actual, expected);
    });
  });

  describe("Mamut Hill", () => {
    it("should return a number when jump is shorter than k point", () => {
      const actual = distancePoints("Mamut", 144, 200);

      const expected = 52.8;

      assert.equal(actual, expected);
    });
    it("should return a number when jump equals than k point", () => {
      const actual = distancePoints("Mamut", 200, 200);

      const expected = 120;

      assert.equal(actual, expected);
    });
    it("should return a number when jump is longer than k point", () => {
      const actual = distancePoints("Mamut", 208.5, 200);

      const expected = 130.2;

      assert.equal(actual, expected);
    });
  });
});