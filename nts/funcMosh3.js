//use occurences code from previous exercies
//handle the problem of not knowing the type of first argument which is being provided, what if it is not an array

const numbers = [1, 2, 3, 4, 1];

try {
    console.log(countOccurrences(true, 1));
} catch (e) {
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array) == true)
        throw new Error('Invalid array')
  return array.reduce(((accumulator, currentValue) => (currentValue === searchElement) ? accumulator+1 : accumulator), 0);
}