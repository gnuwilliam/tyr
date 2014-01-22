var assert = require("assert");
var simpleCalc = require('./../simple/simpleCalc').simpleCalc;

suite('simpleCalc', function () {

  test('1 + 1 should return 2', function () {
    assert.equal(2, simpleCalc(1, 1));
  });
  
});