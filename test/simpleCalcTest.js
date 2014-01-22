var assert = require("assert");
var simple = require('./../simpleCalc/simpleCalc').simpleCalc;

suite('simpleCalc', function () {
  test('1 + 1 should return 2', function () {
    assert.equal(2, simpleCalc(1, 1));
  });
});