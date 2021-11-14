const assert = require('chai').assert;
const middle = require('../middle'); 

const result =  middle([1, 2, 3, 4, 5, 6]);

describe("#head", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(result, [3, 4]);
  });

}); 