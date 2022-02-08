/***
 * Determine the number of the highest value of:
 * a) 3 numbers
 * b) 4 numbers
 * optional -> using math.random 20 times
 * c) a = [3, 5, 1, 2, 7, 7, 5]
 ***/


//a) Determine the number of the highest value out of 3 arguments
const isHighest = (a, b, c) => {
    if (a >= b && a >= c) {
        return `${a} has the highst value`
    } else if (b >= a && b >= c) {
        return `${b} has the highst value`
    }
    return `${c} has the highest value`
}
//const x = isHighest(5,9,1);
//console.log(x);
console.log(`${isHighest(5, 5, 10)}`);

//b) Determine the number of the highest value out of 4 arguments using Math.max function
const isMax = (x, y, z, w) => {
    console.log(Math.max(x, y, z, w));
}
isMax(7, 4, 6, 9);

//b2) Determine the number of the highest value using the function which compares 2 numbers
const isHighest021 = (a, b) => { return a > b ? true : false }
const highestOf3 = (a, b, c) => {
    if (isHighest021(isHighest021(a, b), isHighest021(a, c))) return a
    else if (isHighest021(isHighest021(b, a), isHighest021(b, c))) return b
    else return c
}

const isHighest02 = (a, b) => { return a > b ? a : b }
const highestOf4 = (a, b, c, d) => {
    return isHighest02(isHighest02(a, b), isHighest02(c, d))
}

// Determine highest number out of n arguments 
// const highestOfN = (a, b, ...args) => {
//     let max = a
//     if (a >= b) {
//         for (let i = 0; i < args.length; i++) {
//             if (max <= args[i]) {
//                 max = args[i]
//             }
//         }
//     } else {
//         max = b
//         for (let i = 0; i < args.length; i++) {
//             if (max <= args[i]) {
//                 max = args[i]
//             }
//         }
//     }
//     return max
// }

const highestOfN = (...args) => {
    let max = args[0]
    for (let i = 1; i < args.length; i++) {
        if (max <= args[i]) {
            max = args[i]
        }
    }
    return max
}

const q = highestOfN(5, 8, 9, 6, 77, 88, 4, 5);
console.log(q);



//c) Determine the max value in an array
const a = [3, 5, 1, 2, 7, 7, 5]
let largest = 0;

const maxOfArr = (a) => {
    for (let i = 0; i < a.length; i++) {

        if (largest < a[i]) {
            largest = a[i];
        }
    }
    return largest;
}
console.log(`max of arr ${maxOfArr(a)}`);


//optional - max value out of 20 random numbers stored in an array
// arr = [];
// for (let i = 0; i < 20; i++) {
//     a[i] = Math.floor(Math.random() * 100);
//     arr.push(a[i]);
// }
// console.log(arr);
// console.log(`${maxOfArr(arr)}`);

//max value out of 20 random numbers 'on the fly'

let rnd = Math.floor(Math.random() * 100)
let maxRnd = rnd
for (let i = 0; i < 20; i++) {
    let b = Math.floor(Math.random() * 100)
    //console.log(b)
    maxabc = highestOfN(maxRnd, b)
}
console.log(`max ${maxRnd}`)