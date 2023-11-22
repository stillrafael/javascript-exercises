const sumAll = function(firstNumber, secondNumber) {
let iteration = secondNumber - firstNumber
let holdingValue = firstNumber + 1
for (let i of Array(iteration).keys()) {
    firstNumber +=holdingValue
    holdingValue++
}
return firstNumber
};

// Do not edit below this line
module.exports = sumAll;
