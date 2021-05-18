
// Exercises 1
console.log("Exercises 1");
console.log("\n");

function getArrayLength(arr) {
  return arr.length;
}


console.log(getArrayLength([1, 12, 4]));
console.log(getArrayLength([-1, 0, 1, 2]));
console.log(getArrayLength([]));
console.log(getArrayLength([-1, 0.4]));



// Exercises 2

console.log("\n");
console.log("Exercises 2");
console.log("\n");

function getArrayItemSum(arr) {
  let result = 0;

  arr.forEach(item => {
    result += item;
  });
  return result;
}


console.log(getArrayItemSum([1, 12, 4]));
console.log(getArrayItemSum([-1, 0, 1, 2]));
console.log(getArrayItemSum([]));
console.log(getArrayItemSum([-1, 0.4]));

// Exercises 3

console.log("\n");
console.log("Exercises 3");
console.log("\n");

function creatArrayOfEvenlySpaced(value1,value2,step) {
  let result = [value1];
  for (let i = value1 + step; i < value2; i += step) {
    result.push(i);    
  }

  return result;
}


console.log(creatArrayOfEvenlySpaced(1, 5, 1));
console.log(creatArrayOfEvenlySpaced(10, 100, 20));
console.log(creatArrayOfEvenlySpaced([]));
console.log(creatArrayOfEvenlySpaced(1, 5, 0.5));


// Exercises 4

console.log("\n");
console.log("Exercises 4");
console.log("\n");

let getSymbolCount = (str,sym) => {
  return str.split("").filter(item => item === sym).length;
}

console.log(getSymbolCount("Some text here", ""));
console.log(getSymbolCount("another string", "t"));

// Exercises 5

console.log("\n");
console.log("Exercises 5");
console.log("\n");

function checkPalindrome(str) {
  try {
    if (str !== "") {
      let strToArray = str.split("");
      let ArrayReverse = [...strToArray].reverse();
      for (let i = 0; i < strToArray.length; i++) {
        if (strToArray[i] !== ArrayReverse[i]) {
          return "No";
        }
      }
      return "Yes";
    } else return "No";
  } catch (err){
    return err.message;
  }
}

console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("T"));
console.log(checkPalindrome(""));
console.log(checkPalindrome("palindrome"));


// Exercises 6

console.log("\n");
console.log("Exercises 6");
console.log("\n");

function getMaxInArray(arr) {
  return arr.sort((x, y) => y - x)[0]
}

console.log(getMaxInArray([1, 10, 2, 2, 3]));
console.log(getMaxInArray([1, 4, 43, -112]));



// Exercises 7

console.log("\n");
console.log("Exercises 7");
console.log("\n");

function ConcatArray(arr) {
  let result = "";
  arr.forEach(elem => {
    for (let i = 0; i < elem.length; i++) {
      if (elem[i] !== `"`) {
        result += elem[i];
      }
    }
  });

  return result;
}

console.log(ConcatArray(["hello", "," , " ", "world"]));
console.log(ConcatArray(["a", "c", "a"]));


// Exercises 8

console.log("\n");
console.log("Exercises 8");
console.log("\n");

function getOnlyUnique(arr) {
  let result = [];
  arr.forEach(elem => {
    if (!result.includes(elem)) {
      result.push(elem)
    }
  }); 
  return result;
}


// function getOnlyUnique(arr) {
//   return Array.from(new Set(arr));
// }

console.log(getOnlyUnique([1, 2, 3, 3, 2, 5]	));
console.log(getOnlyUnique([4, 4]));


// Exercises 9

console.log("\n");
console.log("Exercises 9");
console.log("\n");

function changeStringSymbol(str,sym1,sym2) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sym1) {
      result += sym2;
    }else {
      result += str[i];
    }
  };

  return result;
}

console.log(changeStringSymbol("The results are not recorded yet", "t", "w"));
console.log(changeStringSymbol("does the following code", "o", "0"));


// Exercises 10

console.log("\n");
console.log("Exercises 10");
console.log("\n");

function changeStringFirstAndLastSymbol(str) {
  return str.slice(str.length - Math.floor(str.length / 2)) + str.slice(0, Math.ceil(str.length / 2));
}

console.log(changeStringFirstAndLastSymbol("stranger"));
console.log(changeStringFirstAndLastSymbol("rotator"));

