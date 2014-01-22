var assert = require("assert");
var simpleCalc = require('./../simple/simpleCalc').simpleCalc;

suite('simpleCalc', function () {

  test('1 + 1 should return 2', function () {
    assert.equal(2, simpleCalc(1, 1));
  });

  test('5 + 2 should return 7', function () {
    assert.equal(7, simpleCalc(5, 2));
  });

  test('78 + 19 should return 97', function () {
    assert.equal(97, simpleCalc(78, 19));
  });

  test('-1 + -10 should return -11', function () {
    assert.equal(-11, simpleCalc(-1, -10));
  });

  test('a + b shoud return You must specify a number - error', function () {
  	assert.equal('You must specify a number!', simpleCalc('a', 'b'));
  });

});