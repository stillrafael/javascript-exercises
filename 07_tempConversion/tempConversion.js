const toCelsius = 5/9
const toFarh = 9/5
let result
const convertToCelsius = function(degree) {
  result = ((degree - 32 ) * toCelsius)
return Number(result.toFixed(1))
};

const convertToFahrenheit = function(degree) {
  result = ((degree * toFarh) + 32)
  return Number(result.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
