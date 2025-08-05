const palindromes = function (args) {
    const palindrome = args.toLowerCase().replace(/[^a-z0-9]/g, '');    
    const cleaned = palindrome.split("").reverse().join('')
    if (cleaned === palindrome) return true;

    return false;
};

// Do not edit below this line
module.exports = palindromes;
