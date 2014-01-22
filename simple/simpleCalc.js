function simpleCalc(a, b) {
  if (!Number(a) || !Number(b)) return 'You must specify a number!';
  return a + b;
}

module.exports.simpleCalc = simpleCalc;