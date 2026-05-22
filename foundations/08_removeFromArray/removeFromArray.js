const removeFromArray = function (arr, ...vs) {
  return arr.filter((v) => !vs.includes(v));
};

// Do not edit below this line
module.exports = removeFromArray;
