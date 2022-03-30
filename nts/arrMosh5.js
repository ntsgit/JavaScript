// create a function which returns number of times a given element is showing up in an array

const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 4);

console.log(count);
console.log(countOccurrences2(numbers, 1));

function countOccurrences(array, searchElement) {
  let count = 0;

  for (let el of array) 
    if (el === searchElement) count++;
  return count;

}

//challenge : try to solve it using reduce method
function countOccurrences2(array, searchElement) {
  return array.reduce(((accumulator, currentValue) => (currentValue === searchElement) ? accumulator+1 : accumulator), 0);
}

