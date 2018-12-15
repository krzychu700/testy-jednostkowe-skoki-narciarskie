const assert = require("assert");
const stylePoints = require("./calculateStylePoints");

describe("stylePoints", () => {
  it("should return the number when theere are no doubled notes", () => {

    const actual = stylePoints([17.5, 18.5, 18.0, 19.5, 17.0]);
    
    const expected = 54;
    
    assert.equal(actual, expected);
  });

  it("should return number when two of the notes are the same", () => {
    
    const actual = stylePoints([19.0, 18.5, 19.0, 18.5, 17.5]);
    
    const expected = 56;
    
    assert.equal(actual, expected);
  });

  it("should return number when all the notes are the same", () => {
    
    const actual = stylePoints([18.5, 18.5, 18.5, 18.5, 18.5]);
    
    const expected = 55.5;
    
    assert.equal(actual, expected);
  });

});