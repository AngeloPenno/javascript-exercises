const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => {
    return total + number;
  }, 0);
};

const multiply = function(numbers) {
  let total = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;
};

const power = function(a, b) {
	let total = a;
  for (let i = 0; i < b - 1; i ++) {
    total *= a;
  }
  return total;
};

const factorial = function(num) {
	if (num === 0) return 1;
  if (num === 1) return 1;
  return num * factorial(num -1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
