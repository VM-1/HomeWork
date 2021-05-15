console.log("Exercises 1");
console.log("\n");
// Exercises 1

function getAngle(firtsAngle, secondAngle) {
    let anglesOfTriangle = 180;
    thirdAngle = anglesOfTriangle - (firtsAngle + secondAngle);
    return thirdAngle;
}

console.log(getAngle(45, 90));
console.log(getAngle(30, 30));
console.log(getAngle(75, 25));




// Exercises 2

console.log("\n");
console.log("Exercises 2");
console.log("\n");

function sumOfN(firstValue) {
    let result, secondValue, thirdValue;
    for (let i = 0; i <= firstValue; i++) {
        secondValue = firstValue + firstValue;
        thirdValue = firstValue + secondValue;
    }
    result = Number("" + firstValue + secondValue + thirdValue);
    
    return result;
}

console.log(sumOfN(3));
console.log(sumOfN(17));
console.log(sumOfN(100));



// Exercises 3

console.log("\n");
console.log("Exercises 3");
console.log("\n");

function getRemainder(firstValue, secondValue) {
    if ((firstValue % secondValue === 0 ) || (secondValue % firstValue === 0)) {
        return 1;
    } else {
        return 0;
    }
}

console.log(getRemainder(3,14));
console.log(getRemainder(18,2));
console.log(getRemainder(7,21));


// Exercises 4

console.log("\n");
console.log("Exercises 4");
console.log("\n");

function getAverage(firstValue, secondValue, thirdValue, fourthValue, fifthValue) {
    let result = (firstValue + secondValue + thirdValue + fourthValue + fifthValue) / 5;

    return result;
}

console.log(getAverage(45, -12, 0, 3, -15));
console.log(getAverage(7, 52, -23, 9, -81));


// Exercises 5

console.log("\n");
console.log("Exercises 5");
console.log("\n");

function changeNumber(value) {
    let stringValue = String(value);
    let result = stringValue[stringValue.length - 1];

    if  (Number(result) !== 0) {
        for (let i = 0; i < stringValue.length - 1; i++) {
            result += stringValue[i];
        }
    } else result = value;

    result = Number(result);
    return result;
}

console.log(changeNumber(367));
console.log(changeNumber(1002));
console.log(changeNumber(250));
console.log(changeNumber(8));
