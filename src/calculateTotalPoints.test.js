const assert = require("assert");
const totalPoints = require("./calculateTotalPoints");

describe("totalPoints", () => {
  it("should return a number - normal hill", () => {

    const actual = totalPoints(111, "Normal", 98, [19.0, 19.0, 19.0, 19.0, 19.5], -14.4, 3.2);
    
    const expected = 131.8;
    
    assert.equal(actual, expected);
  });

  it("should return a number - large hill", () => {
    
    const actual = totalPoints(134, "Large", 120, [20, 19, 19.5, 19, 18.5], -5.4, 0);
    
    const expected = 137.3;
    
    assert.equal(actual, expected);
  });

  it("should return a number - mamut hill", () => {
    
    const actual = totalPoints(227.5, "Mamut", 200, [18.5, 18.0, 17.5, 18.5, 18.5], -8.4, 8.7);
    
    const expected = 208.3;
    
    assert.equal(actual, expected);
  });
  
});