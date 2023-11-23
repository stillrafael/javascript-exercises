let result
const add = function(firstNumber, secondNumber) {
	result = firstNumber + secondNumber
  return result
};

const subtract = function(firstNumber, secondNumber) {
	result = firstNumber - secondNumber
  return result
};

const sum = function(sumAll) {
  if (sumAll == false) {
    result = 0
  }
  else {
    result = sumAll.reduce((total, amount) => total + amount)
  }  
  return result
};

const multiply = function(multiply) {
  result = multiply.reduce((total, amount) => total * amount)
return result
};

const power = function(firstNumber, secondNumber) {
  result = firstNumber ** secondNumber
  return result
};

const factorial = function(factoralNumber) {
  if (factoralNumber <= 1) {
    return 1
  }
  else {
    result = factoralNumber * factorial(factoralNumber - 1)
    return result
  }
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
