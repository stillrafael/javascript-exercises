const repeatString = function(string, num) {
    let result
    if (num <= -1){
        result = 'ERROR'
        return result
    }
    else if (num >=0) {
    result = string.repeat(num)
    return result
    }
    }
repeatString
// Do not edit below this line
module.exports = repeatString;
