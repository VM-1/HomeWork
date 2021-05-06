// homeWork__2

// Exercises 1
console.log("Exercises 1");
console.log("\n");

function fillTheWords(sentence, arr) {
  let result = "";
  let wordIndex = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "_") {
      result += arr[wordIndex++]
    } else result += sentence[i];

  }

  return result;
}

console.log(fillTheWords("_, we have a _.", ["Houston", "problem"]));
console.log(fillTheWords("If at _ you don’t _, try, try _.", ["first", "succeed", "again"]));
console.log(fillTheWords("May the _ _ _ _." , ["Force", "be", "with", "you"]));



// Exercises 2

console.log("\n");
console.log("Exercises 2");
console.log("\n");


let arrangeArray = function(arr) {
  let oddArray = [];
  let evenArray = [];
  let result = [];
  arr.forEach(element => {
    if (typeof element === "number") {
      if (element % 2 === 0) {
        evenArray.push(element);
      } else {
        oddArray.push(element);
      }
    }
  });

  result = oddArray.concat(evenArray);

  return result;
};

console.log(arrangeArray([8, 0, 1, "hey", 12, 5 , true, "2", null, 7, 3]));
console.log(arrangeArray([8, 8, "meh", 6]));
console.log(arrangeArray([null, null, 1, undefined, 5, 9, false]));



// Exercises 3

console.log("\n");
console.log("Exercises 3");
console.log("\n");

let numAndStringCounter = (arr) => {
  if (!Array.isArray(arr)) {
    return 1
  }

  let number = 0;
  let string = 0;
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      number++;
    } else if (typeof arr[i] === "string") {
      string++;
    }
  }

  result = `Numbers: ${number} , Strings: ${string}`;
  return result;
}

console.log(numAndStringCounter([1, "10", "hi", 2, 3]));
console.log(numAndStringCounter([1, 4, 'i am a string', '456']));
console.log(numAndStringCounter(7, 21));

// Exercises 4

console.log("\n");
console.log("Exercises 4");
console.log("\n");

let getSumMaxAndMinLengths = (arr) => {
  let min = max = arr[0].length;
  let result;
    arr.forEach(element => {
      if (element.length > max) {
        max = element.length;
      }
      if (element.length < min) {
        min = element.length;
      }
    });

  result = min + max;

  return result;
}

console.log(getSumMaxAndMinLengths(["anymore", "raven", "me", "communicate"]));
console.log(getSumMaxAndMinLengths(["wish", "slightly", "understand", "longer", "unexpected", "heart"]));

// Exercises 5

console.log("\n");
console.log("Exercises 5");
console.log("\n");

function getSumOfArrItems(arr) {
  let result = 0;
  if (arr.length > 0) {
    arr.forEach(element => {
      result += element;
    });
  } else result = 0;

  return result;
}

console.log(getSumOfArrItems([1, 12, 4]));
console.log(getSumOfArrItems([-1, 0, 1, 2]));
console.log(getSumOfArrItems([]));
console.log(getSumOfArrItems([-1, 0.4]));


// Exercises 6

console.log("\n");
console.log("Exercises 6");
console.log("\n");

function multConsecutiveTwoElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i] * arr[i + 1])
  }
  
  return result;
}

console.log(multConsecutiveTwoElements([3, 7, 12, 5, 20, 0]));
console.log(multConsecutiveTwoElements([1, 1, 4, 32, 6]));



