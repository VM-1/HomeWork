
// Exercises 1
console.log("Exercises 1");
console.log("\n");

function getPowerBetweenValue(value1,value2) {
  return Math.pow(value1,value2);

}

// function getPowerBetweenValue(value1,value2) {
//   let result = 1;
//   for (let i = 0; i < value2; i++) {
//     result *= value1;
    
//   }

//   return result;
// }


console.log(getPowerBetweenValue(4, 5));
console.log(getPowerBetweenValue(6, 10));



// Exercises 2

console.log("\n");
console.log("Exercises 2");
console.log("\n");


let getFactorial = function(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
};

console.log(getFactorial(5));
console.log(getFactorial(1));
console.log(getFactorial(7));


// Exercises 3

console.log("\n");
console.log("Exercises 3");
console.log("\n");

function removeFirstAndLastDigits(value) {
  let valueToArray = String(value).split("");
  let valueFirstDigit = valueToArray[0];
  let valueLastDigit = valueToArray[valueToArray.length - 1];
  if (valueToArray.length > 1) {
    valueToArray.shift();
    valueToArray.unshift(valueLastDigit);
    valueToArray.pop();
    valueToArray.push(valueFirstDigit);

    let result = Number(valueToArray.join(''));
    return result;
  } else return value
}


console.log(removeFirstAndLastDigits(2));
console.log(removeFirstAndLastDigits(13));
console.log(removeFirstAndLastDigits(895796));


// Exercises 4

console.log("\n");
console.log("Exercises 4");
console.log("\n");

let getFibonacciNumber = (value) => {
  let result;
  if (value > 1) {
    result = [0,1];
    for (let i = 2; i < value; i++) {
      let lastValue = result[i - 2] + result[i - 1];
      if (lastValue > value) {
        return result;
      } else {
        result.push(lastValue);
      } 
    }
  } else result = [0];

}

console.log(getFibonacciNumber(7));
console.log(getFibonacciNumber(45));

// Exercises 5

console.log("\n");
console.log("Exercises 5");
console.log("\n");

function printNumber(value) {
  let result = "";
  for (let i = 1; i <= value; i++) {
    result += i;
    console.log(result);
  }
  for (let i = 1; i < value; i++) {
    result = result.slice(0, -1);
    console.log(result);
  }
}

printNumber(5);


// // Exercises 6

// console.log("\n");
// console.log("Exercises 6");
// console.log("\n");

// function checkValidPassword(str) {
//   if(str.search(/[A-Za-z]/) !== -1 && str.search(/[0-9]/ !== -1 && str.search(/[$#@]/) !== -1)) {
    
//   }
//   // for (let i = 0; i < string.length; i++) {
//   //   if (string[i] === [0-9]) {
//   //     console.log(/[a-z]/);
      
//   //   }
//   // }

//   // return result;
// }

// console.log(checkValidPassword("12asdf"));
// console.log(checkValidPassword("asd156Z$"));

