//function which returns max element
//try to do the same with reduce method

const numbers = [1, 2, 3, 4];

const getMax = (array) => {
 /* let max = array[0];

  for (let i = 1 ; i < array.length; i++) {
   if (array[i] >= max) max = array[i]; 
  }
  return max;*/

  return array.reduce((maxValue, currentValue) => (maxValue < currentValue) ?  currentValue : maxValue);
 
}

console.log(getMax(numbers));