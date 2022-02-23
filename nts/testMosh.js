// max number

let max = (a, b) => {
    return (a < b) ? b : a
}

console.log(max(5,7))

//is format Lanscape

function isLandscape(width, height) {
    return (width>height)
}
console.log(isLandscape(5,7))


//fizBuzz task; fizz if divisable with 3, buzz with 5, fizzBuzz with 3 and 5
//if string then NaN, if neither then return the number

const output=fizzBuzz('5');
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') 
        return NaN
    if  (input%3==0 && input%5==0) 
        return 'fizzBuzz'
    if (input%3==0) 
        return 'fizz'
    if (input%5==0)
        return 'Buzz'
    return input
    
}

//Speed and points, driver's license suspended if more than 12p
console.log(checkSpeed(125));

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;


    if (speed < speedLimit + kmPerPoint) return 'Ok'
    const points = Math.floor((speed - speedLimit)/ kmPerPoint);
    return (points>=12) ? 'Licence suspened' : points
}


//show numbers till limit and odd/even status

showNumbers(5);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 == 0) ? "EVEN" : "ODD"
        console.log(i, message)
    }
}

//find truthies in an array

const array = [0, null, undefined, '', 1, 2, 3]
console.log(countThruthy(array));

function countThruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value)  count++
    }
    return count;
       
    
}

//find properties with string type in an object

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) 
     if (typeof obj[key] === 'string')  console.log(key, obj[key])
    
}


//sum all the numbers divisible with 5 or 3 until the limit

console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i
    }

    return sum;

}

//average mark and grades

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);

    if (average < 60) 'F'
    if (average < 70) return 'D'
    if (average < 80) return 'C'
    if (average < 90) return 'B'
    return 'A'

}

function calculateAverage(array) {
    let sum = 0;
    let l = array.length;

    for (let value of array)
        sum += array[value]

    let average = sum / l;
}

//print *  if 5, every row should have as many * as the number of row they are in

showStars(10);

function showStars(rows) {
    for (let i = 0; i <= rows; i++) {
        let pattern = '';
        for (let p = 0; p <= i; p++)
            pattern += '*';
        console.log(pattern);
    }

}


//prime numbers till the limit

showPrimes(20);
//console.log(prime(7))

function showPrimes(limit) {
    for (let i = 1; i <= limit; i++) {
        if (prime(i))  console.log(i) 

    }
}

function prime(n) {
    let isPrime = true;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) return isPrime == false;
      
    }
    return isPrime;
}