const reverseString = function(input) {
    let returnString = "";

    for (let i = input.length - 1; i >= 0; i--) {
        returnString += input[i];
    }

    return returnString;
};

// console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
