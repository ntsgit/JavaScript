// write a function which will result in an array of numbers from and to given arguments

const numbers = arrayFromRange(-10,-4);

console.log(numbers);

function arrayFromRange(min, max) {
    let array = [];
    for (let i = min; i <= max; i++)
        array.push(i);
    return array;
}