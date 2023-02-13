const fibonacci = function(num) {
  if (num < 1) return "OOPS";
  const start = [1, 1];
  for (i = 2; i < num; i++) {
    start[i] = start[i-1] + start[i-2];
  }
  return start[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
