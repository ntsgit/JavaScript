/***
 * is a number prime
 * first 100 prime numbers
 * a = [2, 4, 6, 7, 8, 8, 13, 14, 5, 2, 2, 7, 21, 5, 9]
 ***/


const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false
    }
    return true
}

//console.log(`${isPrime(29)}`);

console.log('First 100 random prime numbers ');
for (let j = 0; j < 100; j++) {
    // let a = Math.floor(Math.random() * 100);
    if (isPrime(j)) console.log(j);
}

console.log('Prime numbers in an array');
const arrPrimeNo = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) console.log(arr[i]);

    }
}
arrPrimeNo([1, 64, 5, 9, 7, 29]);