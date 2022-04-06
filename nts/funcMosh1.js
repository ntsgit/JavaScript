//function which takes a varying num of arguments and returns its sum

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
  // return args.reduce((a,b) => a+b) ---- another way
}

console.log(sum2([1, 2, 5, 7, 9]));

//what if we don't know if the arguments will be an array or numbers

function sum2(...args) {
  if (args.length == 1 && Array.isArray(args[0])) args = [...args[0]]; //rest operator is taking arguments and storing it in an array, if an arg is an array then ...args will be array of arrays
                                                                      //by using a spred operator in line 15, we are declaring it again as one dim array
  return args.reduce((a, b) => a + b);
}
