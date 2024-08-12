const removeFromArray = function(array, numToRemove) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == numToRemove) {
            array.splice(i, 1);
            i--;
        }
    }

    return array;
};

// console.log(removeFromArray([1, 2, 3, 4], 3));


// Do not edit below this line
module.exports = removeFromArray;
