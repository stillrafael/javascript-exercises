const palindromes = function (userPhrase) {
    let reversed = userPhrase.split('').reverse().join('')
    reversed = reversed.replace(/[!.,\s]/g, '').toLowerCase()
    userPhrase = userPhrase.replace(/[!.,\s]/g, '').toLowerCase()
    if (reversed == userPhrase) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
