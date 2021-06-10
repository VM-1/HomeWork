
// Filter method
console.log("Filter method");
console.log("\n");

function myFilter(func,array) {
  if (array.length === 0 ) return null;
  let arrayCopy = [...array];
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (func(arrayCopy[i], i, arrayCopy)) {
			result.push(array[i])
		}
  }
  return result;
}

arr = [1,2,3,4,5,6,7,8,9,10]

console.log(myFilter((elem) => {
	return elem % 2 === 0;
}, arr));



console.log(myFilter((elem, index) => {
	return elem + index < 10;
}, arr));



console.log(myFilter((elem, index, array) => {
	array[index+1] /= 2;
	return elem + index < 10;
}, arr));




