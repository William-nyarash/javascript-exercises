const add = function(a, b ) {
	return a + b ;
};

const subtract = function( a, b) {
	return a - b;
};

const sum = function(arr ) {
	const arraySum = arr.reduce((a,b) => {
      return a + b
  }, 0)
  return arraySum
};

const multiply = function(arr) {
    const multiplied = arr.reduce((a, b) => {
        return a * b;
    })
    return multiplied;
};

const power = function(a, b) {
	 return a ** b
};

const factorial = function(n) {
	if (n < 0) return undefined;

  let value = 1;
  let number = 2;
  for ( ; number <= n ; number++) {
    value *= number;
  }
  return value;
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
