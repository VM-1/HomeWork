// Exercises 1
console.log("Exercises 1");
console.log("\n");

function displayTheSpecifiedSign(firstValue, secondValue, thirdValue) {
    let result;
    if(firstValue && secondValue && thirdValue) {
        if (firstValue > 0 && secondValue > 0 && thirdValue > 0) {
            result = "+"
        } else if ((firstValue > 0 && secondValue > 0) || (secondValue > 0 && thirdValue > 0) || (firstValue > 0 && thirdValue > 0)) {
            result = "-"
        } else {
            result = "+";
        }
    } else result = "unsigned"

    return result;
}

console.log(displayTheSpecifiedSign(-14, 5, 0));
console.log(displayTheSpecifiedSign(-8, 9, -6));
console.log(displayTheSpecifiedSign(4, 19, -2));



// Exercises 2

console.log("\n");
console.log("Exercises 2");
console.log("\n");


let checkDigit = function(digit, number) {
    let stringNumber = String(number);
    let result;
    for (let i = 0; i < stringNumber.length; i++) {
        if (digit === Number(stringNumber[i])) {
            result = "Yes";
            return result;
        }
    }
    result = "No";
    return result;
};

console.log(checkDigit(5, 2463));
console.log(checkDigit(4, 6));
console.log(checkDigit(8, 45689));


// Exercises 3

console.log("\n");
console.log("Exercises 3");
console.log("\n");

let getChengeDigits = (number) => {
    let stringNumber = String(number);
    let result = stringNumber[stringNumber.length - 1];
    if (stringNumber.length > 1) {
        for (let i = 1; i < stringNumber.length - 1; i++) {
            result += stringNumber[i];
        }
        result += stringNumber[0];
    } else result = number

    return Number(result);
}

console.log(getChengeDigits(2));
console.log(getChengeDigits(13));
console.log(getChengeDigits(895796));

// Exercises 4

console.log("\n");
console.log("Exercises 4");
console.log("\n");

let getSortingNumbers = (firstValue, secondValue, thirdValue) => {
    let result = [];
    if ((firstValue < secondValue) && (firstValue < thirdValue)) {
        result[0] = firstValue;
        if (secondValue < thirdValue) {
            result[1] = secondValue;
            result[2] = thirdValue;
        } else {
            result[1] = thirdValue;
            result[2] = secondValue;
        }
    } else if ((secondValue < firstValue) && (secondValue < thirdValue)) {
        result[0] = secondValue;
        if (firstValue < thirdValue) {
            result[1] = firstValue;
            result[2] = thirdValue;
        } else {
            result[1] = thirdValue;
            result[2] = firstValue;
        }
    } else {
        result[0] = thirdValue;
        if (firstValue < secondValue) {
            result[1] = firstValue;
            result[2] = secondValue;
        } else {
            result[1] = secondValue;
            result[2] = firstValue;
        }
    }

    return result;
}

console.log(getSortingNumbers(45 , 26, 78));
console.log(getSortingNumbers(-23, -456, 0));

// Exercises 5

console.log("\n");
console.log("Exercises 5");
console.log("\n");

function findTheDifference(number) {
    stringNumber = String(number);
    smallestIndex = stringNumber[0];
    greatestIndex = stringNumber[0];
    let result;
    if (stringNumber.length > 1) {
        for (let i = 0; i < stringNumber.length; i++) {
            if (smallestIndex > stringNumber[i]) {
                smallestIndex = stringNumber[i];
            }
            if (greatestIndex < stringNumber[i]) {
                greatestIndex = stringNumber[i];
            }
        }
        
        result = greatestIndex - smallestIndex;
    } else result = 0;
    
    return result;
}

console.log(findTheDifference(5));
console.log(findTheDifference(152));
console.log(findTheDifference(4593653));
