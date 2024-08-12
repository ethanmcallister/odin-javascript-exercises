const sumAll = function(startNum, endNum) {
    let sum = 0;

    for (currentNum = startNum; currentNum <= endNum; currentNum++) {
        sum += currentNum;
    }

    return sum;
};

// console.log(sumAll(1, 4));  // 10

// Do not edit below this line
module.exports = sumAll;
