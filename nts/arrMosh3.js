// write a function which takes 2 arguments, an input array and an array of numbers to be excluded for the input and returns the result

const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
  let newArr = [];
  for (let el of array) 
    if (!excluded.includes(el)) 
        newArr.push(el);

  return newArr;
}
