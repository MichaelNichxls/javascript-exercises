const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  let curr = 1;
  let prev = 0;
  for (let i = 0; i < n; i++) {
    curr += prev;
    prev = curr - prev;
  }
  return prev;
};

// Do not edit below this line
module.exports = fibonacci;
