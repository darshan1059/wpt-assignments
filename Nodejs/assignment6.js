const palindrome = (str) => str == str.split("").reverse().join("");
const upper = (str) => str.toUpperCase();
const find = (arr) => {
    var count = 0;
    arr.forEach(element => {
        if(element.startsWith("www"))
        count++;
    });
    return count;
};

module.exports = {palindrome, upper, find};