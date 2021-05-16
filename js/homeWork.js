
// Exercises 1
console.log("Exercises 1");
console.log("\n");

function getMaxOfArray(arr) {
  return `${Math.max.apply(null, arr)} is maximum`;

}


console.log(getMaxOfArray([-4 , 6, 0]));
console.log(getMaxOfArray([1020, 500, - 450]	));
console.log(getMaxOfArray([14, 8, 14]));



// Exercises 2

console.log("\n");
console.log("Exercises 2");
console.log("\n");


let getAbsoluteValue = function(value) {
  return Math.abs(value);
};

console.log(getAbsoluteValue(-123));
console.log(getAbsoluteValue(35));
console.log(getAbsoluteValue(0));
console.log(getAbsoluteValue(-13));


// Exercises 3

console.log("\n");
console.log("Exercises 3");
console.log("\n");

for (let i = 10; i > 0; i--) {
  console.log(i)
}


// Exercises 4

console.log("\n");
console.log("Exercises 4");
console.log("\n");

let getDigitCount = (value) => {
  return String(Math.abs(value)).length;

}

console.log(getDigitCount(78756));
console.log(getDigitCount(-122));
console.log(getDigitCount(8));
console.log(getDigitCount(0));

// Exercises 5

console.log("\n");
console.log("Exercises 5");
console.log("\n");

function getNineCount(value) {
  return String(value).split('').filter(item => item == 9).length;
}

console.log(getNineCount(129));
console.log(getNineCount(929));
console.log(getNineCount(192999));
console.log(getNineCount(887));


// Exercises 6

console.log("\n");
console.log("Exercises 6");
console.log("\n");

function getPower(value1,value2) {
  let result = [];
  for (let i = 0; i < value2; i++) {
    let power = Math.pow(2,i)
    if (power >= value1 && power <=value2) {
      result.push(power);
    } 
  }

  return result;
}

console.log(getPower(7,45));
console.log(getPower(0, 150));


// Exercises 7

console.log("\n");
console.log("Exercises 7");
console.log("\n");

function insertDashes(value) {
  let valueToString = String(value);
  let result = "";
  if (valueToString.length > 1) {
    for (let i = 0; i < valueToString.length; i++) {
      result += valueToString[i];
      if (valueToString[i] % 2 === 0 && valueToString[i + 1] % 2 === 0) {
        result += '-'; 
      }
    }
  } else return -1;

  return result;
}

console.log(insertDashes(25468));
console.log(insertDashes(7180322));
console.log(insertDashes(42));
console.log(insertDashes(222));



// Exercises 8

console.log("\n");
console.log("Exercises 8");
console.log("\n");

function getReturnValue(value) {
  return String(value).split('').reverse();
}

console.log(getReturnValue(1253));
console.log(getReturnValue(122));


// Exercises 9

console.log("\n");
console.log("Exercises 9");
console.log("\n");

function getZeroCount(value) {
  let valueToString = String(value);
  for (let i = 0; i < valueToString.length; i++) {
    if (valueToString[i] === "0" && valueToString[i + 1] === "0" && valueToString[i + 2] === "0") {
      return "Yes";
    }
  }
  return "No" ;
}

console.log(getZeroCount(10154));
console.log(getZeroCount(350120003));
console.log(getZeroCount(120900));


// Exercises 10

console.log("\n");
console.log("Exercises 10");
console.log("\n");

function removeZeroInArray(value) {
  let valueToArray = String(value).split("");
  let zeroCount = 0;
  for (let i = 0; i < valueToArray.length - 1; i++) {
    if (valueToArray[i] === "0") {
      zeroCount++;
      valueToArray.splice(i,1)
    }
  }
  if (zeroCount > 1) {
    return valueToArray;
  } else return "Nothing to remove."
}

console.log(removeZeroInArray(4050120));
console.log(removeZeroInArray(7845012));
console.log(removeZeroInArray(0));