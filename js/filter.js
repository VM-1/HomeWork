
// Filter method
console.log("Filter method");
console.log("\n");


function filter(array, func, startIndex = 0) {
  if (array.length > 0) {
    let result = [];
    for (let i = startIndex; i < array.length; i++) {
      if (func(array[i])) {
        result.push(array[i])
      }
    }
    return result;
  } else return null

}
let arr = [1,2,3,4,5,6,7,8,9,10];


let result = filter(arr, (x) => {
    return x % 2 === 0
}, startIndex = 2)

console.log(result);



