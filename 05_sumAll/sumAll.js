const sumAll = function(firstNumber, secondNumber) {
let iteration = Math.abs(secondNumber - firstNumber)
let holdingValue
let result
if (firstNumber < 0 || 
    secondNumber < 0 ||
    typeof(firstNumber) !== "number" ||
    typeof(secondNumber) !== "number") {
    result = "ERROR"
}
else {
    if (firstNumber > secondNumber) {
        holdingValue = secondNumber + 1
        result = secondNumber
    }
    
    else {
        holdingValue = firstNumber + 1
        result = firstNumber
    }
    for (let i of Array(iteration).keys()) {
        result +=holdingValue
        holdingValue++
    }
}

return result
};

// Do not edit below this line
module.exports = sumAll;
