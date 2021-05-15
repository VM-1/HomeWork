// homeWork__2

// Exercises 1
console.log("Exercises 1");
console.log("\n");

function defineValue(a, b) {
  let A,B,C,D,E,result;
  if (a > b) {
     A = a + b;
     B = a - b;
     C = a * b;
     D = a / b;
     E = a % b;

    result = `A-${A}, B-${B}, C-${C}, D-${D}, E-${E}`;
    return result;
  } else {
    return -1;
  }

}


console.log(defineValue(14, 5));
console.log(defineValue(99, 11));
console.log(defineValue(81, 16));



// Exercises 2

console.log("\n");
console.log("Exercises 2");
console.log("\n");


let swapVariables = function(var1, var2) {
  var1 += var2;
  var2 = var1 - var2;
  var1 = var1 - var2;

  return(`a = ${var1}, b = ${var2}`);
};

console.log(swapVariables(8, 12));
console.log(swapVariables(10, 20));


// Exercises 3

console.log("\n");
console.log("Exercises 3");
console.log("\n");

let SumOfDigits = (value) => {
  let sum = 0;
  let a, b, c;

  a = value % 10;
  b = (value - a) / 10 % 10;
  c = (value - b * 10 - a) / 100;

  sum = a + b + c
  return sum;
}

console.log(SumOfDigits(306));
console.log(SumOfDigits(912));
console.log(SumOfDigits(505));


// Exercises 4

console.log("\n");
console.log("Exercises 4");
console.log("\n");

let getMonthName = (value) => {
  
  switch (value) {
    case 1: return "January";
    case 2: return "February";
    case 3: return "March";
    case 4: return "April";
    case 5: return "May";
    case 6: return "June";
    case 7: return "July";
    case 8: return "August";
    case 9: return "September";
    case 10: return "October";
    case 11: return "Novermber";
    case 12: return "December";
  }


  return result;
}

console.log(getMonthName(2));
console.log(getMonthName(4));
console.log(getMonthName(11));

// Exercises 5

console.log("\n");
console.log("Exercises 5");
console.log("\n");

function checkOddOrEven(value) {
  return value % 2 == 0 ? "Even" : "Odd"
}

console.log(checkOddOrEven(123));
console.log(checkOddOrEven(25));
console.log(checkOddOrEven(70));


// Exercises 6

console.log("\n");
console.log("Exercises 6");
console.log("\n");

function roundNumber(value) {
  result = Math.round(value / 50) * 50
  
  return result;
}

console.log(roundNumber(25));
console.log(roundNumber(70));
console.log(roundNumber(75));
console.log(roundNumber(24));
console.log(roundNumber(124));
console.log(roundNumber(50));



