
// Determine n-th number of Fibonacci sequence
// example:
// The Fibonacci sequence is the series of numbers
// where each number is the sum of the two
// preceding numbers.
// For example, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// fibonacci(6) = 8
// fibonacci(7) = 13 


function fib(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}

//function call
console.log(fib(5));

const fibSeq = (n) => {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(fib(i));
    }
    console.log(arr);

}
fibSeq(5)