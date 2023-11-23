const palindromes = function (userPhrase) {
    let reversed = userPhrase.split('').reverse().join('')
    if (reversed == userPhrase) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
