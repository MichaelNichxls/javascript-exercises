const sumAll = function (a, b) {
  if (!(Number.isInteger(a) && a >= 0) || !(Number.isInteger(b) && b >= 0)) {
    return "ERROR";
  }
  let sum = []
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum.push(i);
  }
  return sum.reduce((acc, v) => acc + v, );
};

// Do not edit below this line
module.exports = sumAll;
